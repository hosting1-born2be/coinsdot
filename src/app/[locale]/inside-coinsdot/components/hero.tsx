'use client';

import Image from 'next/image';
import { useTranslations } from 'next-intl';

import { Text } from '@/shared/ui/kit/text';
import { Title } from '@/shared/ui/kit/title';

export const Hero = () => {
  const t = useTranslations('insideCoinsdot.hero');

  return (
    <section className="relative flex h-[500px] flex-col max-md:h-[700px]">
      <video
        src="/videos/inside/hero.mp4"
        className="absolute inset-0 h-full w-full object-right max-md:object-cover max-md:object-[30%_center]"
        autoPlay
        muted
        loop
      />
      <Image
        className="absolute inset-0 h-full w-full object-cover"
        src="/images/inside/faded.svg"
        alt="faded"
        fill
      />
      <section className="z-20 container mt-auto flex h-full">
        <div className="z-20 mt-auto flex w-[628px] flex-col gap-2.5 pb-10">
          <Title
            as="h1"
            className="text-[96px] leading-[96px] tracking-[-1.44px] max-md:text-[36px] max-md:leading-[120%] max-md:tracking-[-0.749px]"
          >
            {t('title.0', { fallback: 'Welcome to' })} <br />{' '}
            <span className="font-bold">Coinsdot</span>
          </Title>
          <Text size="lg">
            {t('text', {
              fallback:
                'We’re glad you’re here to learn more about who we are, what we stand for, and how we see the future of crypto exchange.',
            })}
          </Text>
        </div>
      </section>
    </section>
  );
};
