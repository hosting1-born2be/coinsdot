'use client';

import type { ReactNode } from 'react';
import { useEffect, useRef, useState } from 'react';
import { useTranslations } from 'next-intl';

import { Link } from '@/i18n/navigation';

import { cn } from '@/shared/lib/utils/cn';
import { Text } from '@/shared/ui/kit/text';

import { SectionObserverContext } from '../model/policy-context';

export const PolicyRender = ({
  navigation,
  children,
  sticky = false,
  hideNavigation = false,
}: {
  navigation: { label: string; href: string }[];
  children: ReactNode;
  sticky?: boolean;
  hideNavigation?: boolean;
}) => {
  const [activeSection, setActiveSection] = useState(navigation[0].href);
  const sectionRefs = useRef<Record<string, HTMLElement>>({});

  const registerSection = (id: string, el: HTMLElement) => {
    sectionRefs.current[id] = el;
  };

  const unregisterSection = (id: string) => {
    delete sectionRefs.current[id];
  };

  useEffect(() => {
    const observer = new IntersectionObserver(
      entries => {
        const visible = entries
          .filter(e => e.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio);

        if (visible.length > 0) {
          setActiveSection(`#${visible[0].target.id}`);
        }
      },
      {
        root: null,
        rootMargin: '-50% 0px -50% 0px',
        threshold: [0, 0.25, 0.5, 0.75, 1],
      },
    );

    Object.values(sectionRefs.current).forEach(el => observer.observe(el));

    return () => {
      // eslint-disable-next-line react-hooks/exhaustive-deps
      Object.values(sectionRefs.current).forEach(el => observer.unobserve(el));
    };
  }, [children]);

  return (
    <SectionObserverContext.Provider
      value={{ registerSection, unregisterSection }}
    >
      <div className="container flex gap-[64px]">
        {!hideNavigation && (
          <Navigation
            navigation={navigation}
            activeSection={activeSection}
            sticky={sticky}
          />
        )}
        <section
          className={cn(
            'flex w-full flex-col rounded-3xl bg-[#120A34] p-6',
            hideNavigation && 'mx-auto max-w-[880px]',
          )}
        >
          {children}
        </section>
      </div>
    </SectionObserverContext.Provider>
  );
};

const Navigation = ({
  navigation,
  activeSection,
  sticky = false,
}: {
  navigation: { label: string; href: string }[];
  activeSection: string;
  sticky?: boolean;
}) => {
  const t = useTranslations('policies');

  return (
    <div className="flex shrink-0 flex-col gap-5 max-[1360px]:hidden">
      <Text size="lg" weight={700}>
        {t('tableOfContents', { fallback: 'Table of Contents:' })}
      </Text>
      <div
        className={cn(
          'flex w-[400px] flex-col gap-2',
          sticky && 'sticky top-20',
        )}
      >
        {navigation.map(item => (
          <Link key={item.href} href={item.href} className="py-2.5">
            <Text
              weight={700}
              color={activeSection === item.href ? 'azure71' : 'white'}
              className={cn(
                'font-bold transition duration-300 ease-in-out',
                activeSection === item.href
                  ? 'text-[36px] opacity-100'
                  : 'text-[24px] opacity-50',
              )}
            >
              {item.label}
            </Text>
          </Link>
        ))}
      </div>
    </div>
  );
};
