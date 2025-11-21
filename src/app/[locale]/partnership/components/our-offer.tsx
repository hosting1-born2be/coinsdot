'use client';

import type { ReactNode } from 'react';
import { useTranslations } from 'next-intl';

import { IconLayout } from '@/shared/ui/components/icon-layout';
import { EyeSlashIcon } from '@/shared/ui/icons/eye-slash';
import { LineTrendIcon } from '@/shared/ui/icons/line-trend';
import { Text } from '@/shared/ui/kit/text';
import { Title } from '@/shared/ui/kit/title';

export const OurOffer = () => {
  const t = useTranslations('partnership.ourOffer');

  return (
    <section className="container flex flex-col gap-[50px] pt-[112px] pb-[50px] max-md:pb-10">
      <div className="flex flex-col gap-2.5 text-center">
        <Title className="text-[60px] leading-[60px] tracking-[-1.2px] max-md:text-[36px] max-md:leading-[120%] max-md:tracking-[-0.72px]">
          {t('title', { fallback: 'Our Offer' })}
        </Title>
        <Text size="lg">
          {t('text', {
            fallback:
              'The Coinsdot partnership program is built on a simple idea:',
          })}
        </Text>
      </div>
      <section className="flex items-stretch gap-5 max-md:flex-col">
        <div className="flex w-1/2 max-md:w-full">
          <CardLayout>
            <Title
              as="h3"
              color="black"
              className="text-[60px] leading-[60px] tracking-[-1.2px] max-md:text-[36px] max-md:leading-[120%] max-md:tracking-[-0.72px]"
            >
              {t('cards.0.title', {
                fallback:
                  'When you bring people to our platform, you share in the value they create.',
              })}
            </Title>
            <Text size="lg" color="black">
              {t('cards.0.text.0', {
                fallback: 'Our model is designed to create',
              })}{' '}
              <span className="font-bold">
                {t('cards.0.text.1', { fallback: 'mutual growth:' })}
              </span>
            </Text>
          </CardLayout>
        </div>
        <div className="flex w-1/2 flex-col gap-5 max-md:w-full">
          <CardLayout>
            <IconLayout color="grey">
              <EyeSlashIcon />
            </IconLayout>
            <Text size="lg" color="black" weight={700}>
              {t('cards.1.title', { fallback: 'Value for users' })}
            </Text>
            <Text size="lg" color="black">
              {t('cards.1.text', {
                fallback:
                  'they gain access to a clean, compliant crypto platform.',
              })}
            </Text>
          </CardLayout>
          <CardLayout>
            <IconLayout color="grey">
              <LineTrendIcon />
            </IconLayout>
            <Text size="lg" color="black" weight={700}>
              {t('cards.2.title', { fallback: 'Value for you' })}
            </Text>
            <Text size="lg" color="black">
              {t('cards.2.text', {
                fallback:
                  'you receive ongoing rewards based on the activity of the community you help build.',
              })}
            </Text>
          </CardLayout>
        </div>
      </section>
    </section>
  );
};

const CardLayout = ({ children }: { children: ReactNode }) => (
  <div className="flex h-auto flex-col gap-2.5 rounded-3xl bg-white p-8">
    {children}
  </div>
);
