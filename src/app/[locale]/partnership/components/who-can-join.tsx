'use client';

import type { ReactNode } from 'react';
import Image from 'next/image';
import { useTranslations } from 'next-intl';

import { cn } from '@/shared/lib/utils/cn';
import { Text } from '@/shared/ui/kit/text';
import { Title } from '@/shared/ui/kit/title';

export const WhoCanJoin = () => {
  const t = useTranslations('partnership.whoCanJoin');

  return (
    <section className="container flex flex-col rounded-3xl bg-[#120A34] p-2">
      <div className="flex flex-col items-center justify-center gap-2.5 p-8 text-center">
        <Title className="text-[40px] leading-[40px] tracking-[-0.8px] max-md:text-[32px] max-md:leading-[120%] max-md:tracking-[-0.64px]">
          {t('title', { fallback: 'Who Can Join' })}
        </Title>
        <Text size="2xl">
          {t('text.0', {
            fallback: 'Coinsdot is open to partners whose followers, readers,',
          })}{' '}
          <br />
          {t('text.1', {
            fallback: 'or clients are exploring crypto as a payment method:',
          })}
        </Text>
      </div>
      <div className="flex gap-5 max-lg:flex-col">
        <Card
          title={t('cards.0.title', { fallback: 'Influencers' })}
          text={t('cards.0.text', {
            fallback:
              'Your voice can guide your audience to discover how simple it is to exchange crypto.',
          })}
          color="blue"
        >
          <Image
            className="absolute -right-[50%] bottom-0 scale-[3] max-lg:-right-[20%] max-lg:scale-[1]"
            src="/images/partnership/duck.png"
            alt="Influencers"
            width={679}
            height={509}
          />
        </Card>
        <Card
          title={t('cards.1.title', { fallback: 'Industry Media' })}
          text={t('cards.1.text', {
            fallback:
              'You explain crypto to readers. We offer a trustworthy platform they can use.',
          })}
          color="black"
        />
        <Card
          title={t('cards.2.title', { fallback: 'Affiliate Marketers' })}
          text={t('cards.2.text', {
            fallback:
              'Turn your reach into opportunity by introducing your audience to a service designed for crypto payments.',
          })}
        >
          <Image
            className="absolute -right-[20%] bottom-0 scale-[3] max-lg:-right-[20%] max-lg:-bottom-[10%] max-lg:scale-[1.5]"
            src="/images/partnership/money.png"
            alt="Affiliate Marketers"
            width={679}
            height={509}
          />
        </Card>
        <Card
          title={t('cards.3.title', { fallback: 'Educational Platforms' })}
          text={t('cards.3.text', {
            fallback:
              'Help learners discover practical crypto tools that simplify payments.',
          })}
          color="black"
        />
        <Card
          title={t('cards.4.title', { fallback: 'Developers & Fintechs' })}
          text={t('cards.4.text', {
            fallback:
              'If you have a community exploring financial technologies, we provide the crypto payment service that they can apply in practice.',
          })}
          color="blue"
        >
          <Image
            className="absolute bottom-[10%] -left-[10%] scale-[3] max-lg:-right-[20%] max-lg:-bottom-[10%] max-lg:scale-[1.5]"
            src="/images/partnership/trend.png"
            alt="Developers & Fintechs"
            width={679}
            height={509}
          />
        </Card>
      </div>
    </section>
  );
};

const Card = ({
  text,
  title,
  children,
  color = 'blue',
}: {
  title: string;
  text: string;
  color?: 'blue' | 'black';
  children?: ReactNode;
}) => {
  return (
    <article
      className={cn(
        'relative flex h-[580px] flex-1 flex-col gap-4 overflow-hidden rounded-3xl p-8 max-lg:h-[400px] max-lg:w-full max-lg:flex-none',
        color === 'blue' ? 'bg-[#293656]' : 'bg-[#060606]',
      )}
    >
      <Title as="h4" weight={600} className="z-10 text-[26px]">
        {title}
      </Title>
      <Text className="z-10">{text}</Text>
      {children}
      {color === 'black' && (
        <Image
          className="absolute right-0 bottom-0"
          src="/images/partnership/waves.svg"
          alt={title}
          width={220}
          height={300}
        />
      )}
    </article>
  );
};
