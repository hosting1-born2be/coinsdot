'use client';

import type { ReactNode } from 'react';
import Image from 'next/image';
import { useTranslations } from 'next-intl';

import { Link } from '@/i18n/navigation';

import { IconLayout } from '@/shared/ui/components/icon-layout';
import { PlusIcon } from '@/shared/ui/icons/plus';
import { Text } from '@/shared/ui/kit/text';
import { Title } from '@/shared/ui/kit/title';

export const MeetCoinsdot = () => {
  const t = useTranslations('home.meetCoinsdot');

  return (
    <section className="mx-1 flex flex-col rounded-3xl bg-white px-8 py-[112px] max-md:mx-0 max-md:px-0 max-md:py-10">
      <div className="container flex flex-col gap-8">
        <Title
          size="6xl"
          color="black"
          className="text-center max-md:text-[36px] max-md:leading-[120%] max-md:tracking-(--letter-spacing--0_75,-0.749px)"
        >
          {t('title', { fallback: 'Meet Coinsdot!' })}
        </Title>
        <section className="flex gap-5 max-lg:flex-col">
          <Card
            text={t('text.0', {
              fallback:
                'Coinsdot functions as a cryptocurrency exchange, built on clear and regulated processes. Our platform enables the conversion between digital assets and fiat currencies in a transparent environment supported by robust technology.',
            })}
          >
            <Image
              className="absolute -top-14 -right-32 h-[550px] w-[700px] object-cover max-md:-right-10 max-md:h-[400px] max-md:w-[600px]"
              src="/images/home/meet-1.png"
              alt="Meet Coinsdot"
              width={900}
              height={750}
            />
          </Card>
          <Card
            text={t('text.1', {
              fallback:
                'Coinsdot applies a comprehensive safeguard framework designed to counter internal risks and protect data, funds, and transactions. Each transaction undergoes thorough screening and review to maintain the security of the platform and its users.',
            })}
          >
            <video
              src="/videos/home/meet.mp4"
              className="absolute -top-60 -right-60 h-[800px] w-[900px] object-cover max-[1275px]:-top-40 max-[1275px]:-right-40 max-[1275px]:h-[600px] max-[1275px]:w-[700px]"
              autoPlay
              muted
              loop
            />
          </Card>
        </section>
      </div>
    </section>
  );
};

const Card = ({ text, children }: { text: string; children: ReactNode }) => {
  return (
    <article className="relative flex h-[600px] w-1/2 flex-col overflow-hidden rounded-3xl bg-black p-8 max-lg:w-full max-md:h-[408px] max-md:p-5">
      {children}
      <div className="z-20 mt-auto flex items-end justify-between gap-2">
        <Text size="lg" color="white" className="max-md:text-xs">
          {text}
        </Text>
        <LinkBtn />
      </div>
    </article>
  );
};

const LinkBtn = () => (
  <Link href="/inside-coinsdot">
    <IconLayout>
      <PlusIcon />
    </IconLayout>
  </Link>
);
