'use client';

import Image from 'next/image';
import { useTranslations } from 'next-intl';

import { articlesSlugs } from '@/features/articles/model/articles';

import { Link } from '@/i18n/navigation';

import { GhostButton } from '@/shared/ui/kit/ghost-button';
import { Text } from '@/shared/ui/kit/text';
import { Title } from '@/shared/ui/kit/title';

export const Banner = () => {
  const t = useTranslations('cryptoInsights.banner');

  return (
    <section className="container flex flex-col rounded-3xl bg-[#120A34] p-2">
      <Image
        className="h-[403px] w-full rounded-3xl object-cover object-top"
        src="/images/crypto-insights/banner.jpg"
        alt="banner"
        width={1000}
        height={403}
        unoptimized
      />
      <section className="flex items-end gap-[104px] p-6 max-md:flex-col max-md:items-start max-md:gap-5">
        <div className="flex flex-col gap-2.5">
          <Title
            size="4xl"
            className="text-[40px] leading-[48px] tracking-[-0.8px] max-md:text-[24px] max-md:leading-[28px] max-md:font-bold max-md:tracking-[-0.48px]"
          >
            {t('title', {
              fallback: 'Myth: Crypto Is Only for Developers and Tech Geeks',
            })}
          </Title>
          <Text size="lg">
            {t('text', {
              fallback:
                'Think cryptocurrency is only for developers and tech enthusiasts? Think again. From Starbucks to real estate, crypto is becoming part of everyday financial life. Discover how Coinsdot makes exchanging Bitcoin, Ethereum with fiat secure and fully under your control.',
            })}
          </Text>
        </div>
        <Link href={`/crypto-insights/${articlesSlugs.myth}`}>
          <GhostButton className="pl-9 max-md:ml-16">
            {t('button', { fallback: 'Read' })}
          </GhostButton>
        </Link>
      </section>
    </section>
  );
};
