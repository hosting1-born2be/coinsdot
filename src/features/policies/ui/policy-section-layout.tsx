'use client';

import { useEffect, useRef } from 'react';

import { cn } from '@/shared/lib/utils/cn';
import { Title } from '@/shared/ui/kit/title';

import { useSectionObserver } from '../model/policy-context';

export const PolicySectionLayout = ({
  children,
  title,
  className,
  titleId,
  withoutBorder = false,
}: {
  children: React.ReactNode;
  title: string;
  className?: string;
  titleId: string;
  withoutBorder?: boolean;
}) => {
  const ref = useRef<HTMLDivElement>(null);
  const { registerSection, unregisterSection } = useSectionObserver();

  useEffect(() => {
    if (ref.current) registerSection(titleId, ref.current);
    return () => unregisterSection(titleId);
  }, [titleId, registerSection, unregisterSection]);

  return (
    <section
      ref={ref}
      id={titleId}
      className={cn(
        'flex flex-col gap-6 border-b border-b-white/15 pt-6 pb-6 first:pt-0 last:border-b-0 last:pb-0',
        withoutBorder && 'border-b-0 pb-0',
        className,
      )}
    >
      <Title
        size="4xl"
        className={cn(
          'text-[40px] leading-[44px] tracking-[-0.8px] max-md:text-[24px] max-md:leading-[28px] max-md:tracking-[-0.48px]',
          withoutBorder &&
            'text-[32px] leading-[36px] tracking-[-0.64px] max-md:text-[20px] max-md:leading-[24px] max-md:tracking-[-0.4px]',
        )}
      >
        {title}
      </Title>
      {children}
    </section>
  );
};
