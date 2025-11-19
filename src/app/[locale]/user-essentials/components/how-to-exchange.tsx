'use client';

import { useTranslations } from 'next-intl';

import { Button } from '@/shared/ui/kit/button';
import { Text } from '@/shared/ui/kit/text';
import { Title } from '@/shared/ui/kit/title';

const getSteps = (t: ReturnType<typeof useTranslations>) => [
  {
    number: '01',
    title: t('steps.0.title', { fallback: 'Register and create your profile' }),
    text: t('steps.0.text', {
      fallback:
        'Sign up with Coinsdot in a few minutes. Registration is free and straightforward, simply complete the form and confirm your account.',
    }),
  },
  {
    number: '02',
    title: t('steps.1.title', { fallback: 'Complete verification' }),
    text: t('steps.1.text', {
      fallback:
        'Depending on the transaction amount, verification may vary. Submitting the required documents ensures compliance with regulations and keeps your exchanges secure.',
    }),
  },
  {
    number: '03',
    title: t('steps.2.title', { fallback: 'Link your crypto wallet' }),
    text: t('steps.2.text', {
      fallback:
        'Coinsdot does not hold your funds. To exchange cryptocurrency, connect your personal wallet, we recommend using official Bitcoin or Ethereum wallets, or a trusted multi-currency wallet of your choice.',
    }),
  },
  {
    number: '04',
    title: t('steps.3.title', {
      fallback: 'Choose necessary coins you want to buy or sell',
    }),
    text: t('steps.3.text', {
      fallback:
        'Choose what you need: buy or sell crypto, the coin and exchange.',
    }),
  },
  {
    number: '05',
    title: t('steps.4.title', {
      fallback: 'Confirm and track your transaction',
    }),
    text: t('steps.4.text', {
      fallback:
        'Once confirmed, the transaction will be processed securely. You can monitor its status in real time.',
    }),
  },
];

export const HowToExchange = () => {
  const t = useTranslations('userEssentials.howToExchange');

  return (
    <section className="container flex flex-col gap-[50px] py-[112px]">
      <Title className="text-center text-[60px] leading-[60px] tracking-[-1.2px]">
        {t('title', { fallback: 'How to Exchange with Coinsdot' })}
      </Title>
      <ul className="flex gap-6 border-y border-y-white/50 px-10 max-lg:flex-col">
        {getSteps(t).map(step => (
          <Card key={step.number} {...step} />
        ))}
      </ul>
      <Button size="xl" variant="faded" className="mx-auto font-bold">
        {t('button', { fallback: 'Exchange  with Coinsdot' })}
      </Button>
    </section>
  );
};

const Card = ({
  number,
  title,
  text,
}: {
  number: string;
  title: string;
  text: string;
}) => (
  <li className="flex flex-1 flex-col gap-4 border-r border-r-white/50 px-2 py-5 max-lg:border-t max-lg:border-r-0 max-lg:border-t-white/50">
    <Text
      weight={600}
      className="text-[60px] leading-[110%] tracking-[-1.2px] text-[#789BF3]"
    >
      {number}
    </Text>
    <div className="flex flex-col">
      <Text size="lg" weight={600}>
        {title}
      </Text>
      <Text size="base">{text}</Text>
    </div>
  </li>
);
