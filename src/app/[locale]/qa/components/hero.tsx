'use client';

import Image from 'next/image';
import { useTranslations } from 'next-intl';

import { Text } from '@/shared/ui/kit/text';
import { Title } from '@/shared/ui/kit/title';

export const Hero = () => {
  const t = useTranslations('qa.hero');

  return (
    <section className="relative container flex flex-col gap-2.5 overflow-hidden pt-[120px] pb-10 max-md:h-[350px] max-md:justify-end max-md:pt-0">
      <div className="absolute -top-[34%] -left-[86%] h-[300%] w-[300%] max-md:top-[36%] max-md:left-[20%] max-md:h-full max-md:w-full">
        <Image
          className="object-contain"
          src="/images/qa/hero.png"
          alt="hero"
          fill
          unoptimized
        />
      </div>
      <div className="absolute inset-0 z-10 bg-black/70" />
      <Title className="z-20 text-[96px] leading-[96px] tracking-[-1.44px] max-md:text-[36px] max-md:leading-[120%] max-md:tracking-[-0.72px]">
        {t('title', { fallback: 'Q&A' })}
      </Title>
      <Text size="lg" className="z-20">
        {t('text', { fallback: 'Answers to your key questions.' })}
      </Text>
    </section>
  );
};
