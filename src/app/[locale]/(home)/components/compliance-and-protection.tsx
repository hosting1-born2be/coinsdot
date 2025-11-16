'use client';

import type { ReactNode } from 'react';
import Image from 'next/image';
import { useTranslations } from 'next-intl';

import { Text } from '@/shared/ui/kit/text';
import { Title } from '@/shared/ui/kit/title';

export const ComplianceAndProtection = () => {
  const t = useTranslations('home.complianceAndProtection');

  return (
    <section className="mx-1 flex flex-col gap-8 overflow-hidden rounded-3xl bg-[#F0F2F7] py-[112px] max-md:py-10">
      <Title
        className="mx-auto w-[645px] text-center max-md:mx-0 max-md:w-full max-md:text-[36px]"
        color="black"
      >
        {t('title.0', { fallback: 'Compliance & Protection at' })}{' '}
        <span className="font-bold">
          {t('title.1', { fallback: 'Coinsdot' })}
        </span>
      </Title>
      <section className="container flex gap-5 max-md:flex-col">
        <div className="flex w-1/2 flex-col gap-6 max-md:w-full max-md:flex-col-reverse">
          <ImageCard
            title={t('cards.0.title', { fallback: 'Data Kept Private' })}
            text={t('cards.0.text', {
              fallback:
                'Your documents and personal details are stored securely and encrypted — never exposed or shared outside regulated checks.',
            })}
          >
            <Image
              className="absolute right-0 bottom-0"
              src="/images/home/safe.svg"
              alt="Compliance"
              width={559}
              height={429}
            />
          </ImageCard>
          <Card
            title={t('cards.1.title', { fallback: 'Helpful Support' })}
            text={t('cards.1.text', {
              fallback:
                'If you have questions during verification or payment, our team is here to guide you step by step.',
            })}
          />
        </div>
        <div className="flex w-1/2 flex-col gap-6 max-md:w-full max-md:flex-col-reverse">
          <Card
            title={t('cards.2.title', { fallback: 'Verified Users Only' })}
            text={t('cards.2.text', {
              fallback:
                'Document verification is required for all clients. This is a strict requirement for any licensed financial service, and it helps keep the platform compliant and trustworthy.',
            })}
          />
          <ImageCard
            title={t('cards.3.title', { fallback: 'Safe Transactions' })}
            text={t('cards.3.text', {
              fallback:
                'Every payment passes through regulated banking channels, giving you clarity and peace of mind with every exchange.',
            })}
          >
            <Image
              className="absolute right-0 bottom-0"
              src="/images/home/folder.svg"
              alt="Compliance"
              width={559}
              height={429}
            />
          </ImageCard>
        </div>
      </section>
    </section>
  );
};

const ImageCard = ({
  children,
  text,
  title,
}: {
  children: ReactNode;
  title: string;
  text: string;
}) => {
  return (
    <article className="relative flex h-[590px] flex-col gap-4 overflow-hidden rounded-3xl bg-[#070D19] p-8">
      <span className="absolute -top-[20%] -left-[30%] h-[270px] w-[419px] rounded-full bg-[#120A34] blur-[100px]" />
      <Title size="2xl" weight={600} className="z-10">
        {title}
      </Title>
      <Text className="z-10 max-w-[332px]">{text}</Text>
      {children}
    </article>
  );
};

const Card = ({ title, text }: { title: string; text: string }) => {
  return (
    <article className="relative flex h-[420px] flex-col gap-4 rounded-3xl bg-[#120A34] p-8">
      <Title size="2xl" weight={600}>
        {title}
      </Title>
      <Text className="max-w-[332px]">{text}</Text>
      <Image
        className="absolute right-0 bottom-0"
        src="/images/home/comp.svg"
        alt="Compliance"
        width={543}
        height={321}
      />
    </article>
  );
};
