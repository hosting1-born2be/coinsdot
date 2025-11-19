'use client';

import { useCallback, useEffect, useRef, useState } from 'react';
import Image from 'next/image';
import { useTranslations } from 'next-intl';

import { Badge } from '@/shared/ui/kit/badge';
import { Text } from '@/shared/ui/kit/text';
import { Title } from '@/shared/ui/kit/title';

const getPackages = (t: ReturnType<typeof useTranslations>) => [
  {
    title: t('packages.0.title', { fallback: 'Personal Identification' }),
    text: t('packages.0.text', {
      fallback:
        'Government-issued photo identification such as a passport, ID card, driver’s licence, or official residence permit.',
    }),
  },
  {
    title: t('packages.1.title', { fallback: 'Residential Proof' }),
    text: t('packages.1.text', {
      fallback:
        'Recent documentation confirming your place of residence, e.g. utility statement, bank record, or telecom bill (issued within the past three months).',
    }),
  },
  {
    title: t('packages.2.title', { fallback: 'Financial Background' }),
    text: t('packages.2.text', {
      fallback:
        'A completed Source of Funds declaration together with supporting evidence to validate the origin of the assets used.',
    }),
  },
  {
    title: t('packages.3.title', { fallback: 'Verification Procedures' }),
    text: t('packages.3.text', {
      fallback:
        'All identity checks are carried out through accredited third-party providers. In some cases, enhanced due diligence may require an additional questionnaire or a brief video interview.',
    }),
  },
  {
    title: t('packages.4.title', { fallback: 'Supporting Forms' }),
    text: t('packages.4.text', {
      fallback:
        'Depending on the payment volume, Coinsdot may request short compliance forms related to purchase details or customer experience.',
    }),
  },
];

export const VerificationPackage = () => {
  const t = useTranslations('userEssentials.verificationPackage');

  const packages = getPackages(t);

  const [activeIndex, setActiveIndex] = useState(0);
  const progressRef = useRef<HTMLDivElement>(null);
  const intervalRef = useRef<ReturnType<typeof setInterval> | null>(null);

  const startInterval = useCallback(() => {
    if (intervalRef.current) clearInterval(intervalRef.current);
    intervalRef.current = setInterval(() => {
      setActiveIndex(prev => (prev + 1) % packages.length);
    }, 5000);
  }, [packages.length]);

  useEffect(() => {
    startInterval();
    return () => {
      if (intervalRef.current) clearInterval(intervalRef.current);
    };
  }, [startInterval]);

  useEffect(() => {
    if (progressRef.current) {
      progressRef.current.style.transition = 'none';
      progressRef.current.style.width = '0%';
      void progressRef.current.offsetWidth;
      progressRef.current.style.transition = 'width 5s linear';
      progressRef.current.style.width = '100%';
    }
  }, [activeIndex]);

  const handleBadgeClick = (index: number) => {
    setActiveIndex(index);
    startInterval();
  };

  return (
    <section className="container py-[64px]">
      <div className="flex flex-col rounded-3xl bg-[#120A34] p-2">
        <div className="flex flex-col gap-2.5 p-8 max-md:px-2 max-md:py-8">
          <Title className="text-[60px] leading-[60px] tracking-[-1.2px] max-md:text-[36px] max-md:leading-[120%] max-md:tracking-[-0.72px]">
            <span className="font-bold">Coinsdot</span>{' '}
            {t('title', { fallback: 'Verification Package' })}
          </Title>
          <Text size="2xl" className="max-md:text-lg">
            {t('text', {
              fallback:
                'To ensure every transaction complies with international standards, Coinsdot requires a full KYC package before payments can be processed:',
            })}
          </Text>
        </div>
        <div className="relative flex h-[502px] flex-col overflow-hidden rounded-2xl p-8 max-md:px-2">
          <Image
            className="object-cover"
            src="/images/user-essentials/package.jpg"
            alt="verification-package"
            fill
            unoptimized
          />
          <div className="absolute inset-0 bg-black/50" />
          <section className="z-20 flex h-full flex-col justify-between">
            <div className="flex items-center gap-2.5 max-lg:overflow-x-auto max-lg:[-ms-overflow-style:none] max-lg:[scrollbar-width:none] max-lg:[&::-webkit-scrollbar]:hidden">
              {packages.map(({ title }, index) => (
                <Badge
                  key={title}
                  active={index === activeIndex}
                  onClick={() => handleBadgeClick(index)}
                >
                  {title}
                </Badge>
              ))}
            </div>
            <div className="flex flex-col gap-5">
              <Text size="lg">{packages[activeIndex].text}</Text>
              <div className="relative h-[3px] w-full rounded-[64px] bg-white/30">
                <span
                  key={activeIndex}
                  className="absolute bottom-0 left-0 h-[3px] bg-white"
                  style={{ width: '0%', transition: 'width 5s linear' }}
                  ref={progressRef}
                />
              </div>
            </div>
          </section>
        </div>
      </div>
    </section>
  );
};
