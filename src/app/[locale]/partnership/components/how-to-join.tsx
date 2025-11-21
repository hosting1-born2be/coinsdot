'use client';

import type { ReactNode } from 'react';
import { useTranslations } from 'next-intl';

import { Text } from '@/shared/ui/kit/text';
import { Title } from '@/shared/ui/kit/title';

const getCards = (t: ReturnType<typeof useTranslations>) => [
  {
    title: t('cards.0.title', { fallback: 'Apply' }),
    description: (
      <>
        {t('cards.0.text.0', {
          fallback: 'Fill out the application form below.',
        })}
        <br />
        {t('cards.0.text.1', {
          fallback:
            'We’ll review your request and send you the agreement and KYB requirements.',
        })}
      </>
    ),
  },
  {
    title: 'Verify',
    description: (
      <>
        {t('cards.1.text.0', {
          fallback: 'Submit the requested documents.',
        })}
        <br />
        {t('cards.1.text.1', {
          fallback:
            'Once approved, you’ll receive your partner ID and access to your resources.',
        })}
      </>
    ),
  },
  {
    title: t('cards.2.title', { fallback: 'Share' }),
    description: t('cards.2.text', {
      fallback:
        'Promote Coinsdot with your unique link across your platforms and communities.',
    }),
  },
  {
    title: t('cards.3.title', { fallback: 'Earn' }),
    description: (
      <>
        {t('cards.3.text.0', {
          fallback:
            'Receive commissions for every invoice payment made by users you bring in.',
        })}
        <br />
        {t('cards.3.text.1', {
          fallback: 'Track everything from your dashboard.',
        })}
      </>
    ),
  },
];

export const HowToJoin = () => {
  const t = useTranslations('partnership.howToJoin');

  const cards = getCards(t);

  return (
    <section className="relative container flex items-stretch gap-[50px] py-[112px] max-md:flex-col max-md:gap-[64px] max-md:px-10! max-md:pt-[64px] max-md:pb-0">
      <Title className="shrink-0 text-[60px] leading-[60px] tracking-[-1.2px] max-md:shrink-0 max-md:text-center max-md:text-[40px] max-md:leading-[120%] max-md:tracking-[-0.8px]">
        {t('title', { fallback: 'How to Join' })}
      </Title>
      <div className="relative flex w-[3px] self-stretch rounded-[64px] bg-white/30 max-md:hidden">
        <span className="absolute inset-0 top-0 z-10 h-[448px] w-[3px] bg-white" />
      </div>
      <section className="flex w-full flex-col gap-6 pr-5">
        {cards.map(card => (
          <Card key={card.title} {...card} />
        ))}
      </section>
    </section>
  );
};

const Card = ({
  title,
  description,
}: {
  title: string;
  description: ReactNode;
}) => (
  <article className="flex flex-col gap-4 border-t border-t-white/30 py-5">
    <Title
      weight={600}
      color="light-azure"
      className="text-[60px] leading-[60px] tracking-[-1.2px] max-md:text-[36px]"
    >
      {title}
    </Title>
    <Text size="lg" weight={600}>
      {description}
    </Text>
  </article>
);
