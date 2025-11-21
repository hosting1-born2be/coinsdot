'use client';

import Image from 'next/image';
import { useTranslations } from 'next-intl';

import { Text } from '@/shared/ui/kit/text';
import { Title } from '@/shared/ui/kit/title';

export const Hero = () => {
  const t = useTranslations('partnership.hero');

  return (
    <section className="relative flex h-[429px] flex-col justify-end overflow-hidden max-md:h-[650px]">
      <div className="absolute -top-[120%] -left-[70%] h-[300%] w-[300%] max-md:-top-[140%] max-md:-left-full">
        <Image
          className="object-contain max-md:z-20"
          src="/images/partnership/hero.png"
          alt="hero"
          fill
          unoptimized
        />
      </div>
      <Image
        className="absolute inset-0 bottom-0 z-10 h-[429px] w-full object-cover max-md:h-[500px]"
        src="/images/contacts/faded.svg"
        alt="faded"
        width={1400}
        height={429}
        unoptimized
      />
      <div className="z-20 container flex flex-col gap-2.5">
        <Title
          as="h1"
          className="text-[96px] leading-[96px] tracking-[-1.44px] max-md:text-[36px] max-md:leading-[120%] max-md:tracking-[-0.72px]"
        >
          {t('title.0', { fallback: 'Partnership' })}
          <br /> {t('title.1', { fallback: 'Opportunities' })}
          <br /> {t('title.2', { fallback: 'with' })}{' '}
          <span className="font-bold">Coinsdot</span>
        </Title>
        <Text size="lg">
          {t('text', { fallback: 'Earn as you grow with us.' })}
        </Text>
      </div>
    </section>
  );
};
