'use client';

import type { JSX } from 'react';
import Image from 'next/image';
import { useTranslations } from 'next-intl';

import { CopyIcon } from '@/shared/ui/icons/copy';
import { EyeSlashIcon } from '@/shared/ui/icons/eye-slash';
import { LineTrendIcon } from '@/shared/ui/icons/line-trend';
import { Button } from '@/shared/ui/kit/button';
import { Text } from '@/shared/ui/kit/text';
import { Title } from '@/shared/ui/kit/title';

const getCards = (t: ReturnType<typeof useTranslations>) => [
  {
    icon: EyeSlashIcon,
    title: t('cards.0.title', { fallback: 'Invalid or fraudulent' }),
    text: t('cards.0.text', {
      fallback: 'Forged, stolen, or altered identity papers.',
    }),
  },
  {
    icon: LineTrendIcon,
    title: t('cards.1.title', { fallback: 'Low quality' }),
    text: t('cards.1.text', {
      fallback:
        'Scans or photos that are blurred, cropped, poorly lit, or otherwise unclear.',
    }),
  },
  {
    icon: CopyIcon,
    title: t('cards.2.title', { fallback: 'Outdated or duplicated' }),
    text: t('cards.2.text', {
      fallback:
        'Expired IDs, or copies of copies instead of original documents.',
    }),
  },
];

export const DocumentsCannotAccept = () => {
  const t = useTranslations('userEssentials.documentsCannotAccept');

  return (
    <section className="mx-1 flex flex-col gap-8 overflow-hidden rounded-3xl bg-white py-[112px] max-md:mx-0 max-md:px-2 max-md:py-8">
      <div className="flex flex-col gap-2.5 text-center">
        <Title
          color="black"
          className="text-[60px] leading-[60px] tracking-[-1.2px] max-lg:text-[36px] max-lg:leading-[120%] max-lg:tracking-[-0.72px]"
        >
          {t('title', { fallback: 'Documents We Cannot Accept' })}
        </Title>
        <Text color="black" size="lg" className="max-lg:text-base">
          {t('text.0', {
            fallback:
              'For compliance reasons, Coinsdot can only process valid and verifiable documentation.',
          })}{' '}
          <br />
          {t('text.1', {
            fallback:
              'Submissions will be rejected if they fall into any of the following categories.',
          })}
        </Text>
      </div>
      <section className="relative container flex max-lg:flex-col">
        <Image
          className="absolute -top-[44%] -left-[38%] max-[1600px]:-left-[32%] max-[1535px]:-top-[40%] max-[1280px]:-top-[16%] max-lg:top-10 max-lg:left-1/2 max-lg:-translate-x-1/2 max-lg:scale-[1.5]"
          src="/images/user-essentials/folder.png"
          alt="folder"
          width={1360}
          height={1020}
          unoptimized
        />
        <div className="w-1/2 max-lg:h-[682px] max-lg:w-full max-sm:h-[380px]" />
        <div className="flex w-1/2 flex-col gap-5 max-lg:w-full">
          {getCards(t).map(card => (
            <Card key={card.title} {...card} />
          ))}
        </div>
      </section>
      <Button
        size="xl"
        variant="primary"
        className="mx-auto w-[300px] font-bold"
      >
        {t('button', { fallback: 'Join Us' })}
      </Button>
    </section>
  );
};

const Card = ({
  icon: Icon,
  title,
  text,
}: {
  icon: () => JSX.Element;
  title: string;
  text: string;
}) => {
  return (
    <article className="flex flex-col gap-2.5 rounded-3xl bg-black p-8">
      <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-[#F0F2F7]">
        <Icon />
      </div>
      <Text size="lg" weight={600}>
        {title}
      </Text>
      <Text size="lg">{text}</Text>
    </article>
  );
};
