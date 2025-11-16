'use client';

import type { ReactNode } from 'react';
import Image from 'next/image';
import { useTranslations } from 'next-intl';

import { Text } from '@/shared/ui/kit/text';
import { Title } from '@/shared/ui/kit/title';

export const TrustedBy = () => {
  const t = useTranslations('home.trustedBy');

  return (
    <section className="relative container flex h-[1044px] flex-col gap-10 py-[112px] max-lg:h-[1087px]">
      <video
        src="/videos/home/trusted.mp4"
        className="absolute inset-0 h-full w-full object-cover"
        autoPlay
        muted
        loop
      />
      <div className="z-10 flex w-[453px] flex-col gap-2.5 max-md:w-full">
        <Text size="lg">{t('title', { fallback: 'Trusted by' })}</Text>
        <Title
          as="h4"
          className="text-[36px] leading-[120%] tracking-[-0.749px]"
        >
          {t('text', { fallback: 'by authoritative crypto media worldwide!' })}
        </Title>
      </div>
      <section className="flex h-full flex-col justify-between">
        <div className="z-10 flex gap-[214px] max-lg:flex-col max-lg:gap-2.5">
          <LogoLayout>
            <Image
              src="/images/partners/insiders.svg"
              alt="Insiders"
              width={307}
              height={27}
            />
          </LogoLayout>
          <LogoLayout>
            <Image
              src="/images/partners/forbes.svg"
              alt="Forbes"
              width={305}
              height={76}
            />
          </LogoLayout>
        </div>
        <div className="z-10 ml-auto flex gap-[160px] max-lg:mt-2.5 max-lg:ml-0 max-lg:flex-col max-lg:gap-2.5">
          <LogoLayout>
            <Image
              src="/images/partners/cryptonomist.svg"
              alt="Cryptonomist"
              width={374}
              height={54}
            />
          </LogoLayout>
          <LogoLayout>
            <Image
              src="/images/partners/express.svg"
              alt="Express"
              width={392}
              height={45}
            />
          </LogoLayout>
        </div>
        <div className="z-10 flex gap-[172px] max-lg:mt-2.5 max-lg:flex-col max-lg:gap-2.5 max-lg:pb-5">
          <LogoLayout>
            <Image
              src="/images/partners/globe.svg"
              alt="globe"
              width={459}
              height={52}
            />
          </LogoLayout>
          <LogoLayout>
            <Image
              src="/images/partners/cryptopolitan.svg"
              alt="Cryptopolitan"
              width={307}
              height={71}
            />
          </LogoLayout>
        </div>
      </section>
    </section>
  );
};

const LogoLayout = ({ children }: { children: ReactNode }) => (
  <section className="flex h-max flex-col items-center justify-center rounded-2xl bg-white/15 p-10">
    {children}
  </section>
);
