'use client';

import { useTranslations } from 'next-intl';

import { Text } from '@/shared/ui/kit/text';
import { Title } from '@/shared/ui/kit/title';

export const Hero = () => {
  const t = useTranslations('cryptoInsights.hero');

  return (
    <section className="container flex flex-col gap-2.5 pt-[120px] pb-10 max-md:h-[350px] max-md:justify-end max-md:pt-0">
      <Title className="text-[96px] leading-[96px] tracking-[-1.44px] max-md:text-[36px] max-md:leading-[120%] max-md:tracking-[-0.72px]">
        {t('title', { fallback: 'Crypto Insights' })}
      </Title>
      <Text size="lg">
        {t('text', { fallback: 'Essentials you need to know.' })}
      </Text>
    </section>
  );
};
