'use client';

import Image from 'next/image';
import { useTranslations } from 'next-intl';

import { Button } from '@/shared/ui/kit/button';
import { Text } from '@/shared/ui/kit/text';
import { Title } from '@/shared/ui/kit/title';

const getSteps = (t: ReturnType<typeof useTranslations>) => [
  t('steps.0', {
    fallback:
      'Coinsdot is operated by a licensed company supported by a qualified team with solid experience in the financial and digital asset sectors.',
  }),
  t('steps.1', {
    fallback:
      'We provide a reliable exchange service for both newcomers to cryptocurrency and those already familiar with the market.',
  }),
];

export const ExchangeWithExperts = () => {
  const t = useTranslations('insideCoinsdot.exchangeWithExperts');

  const steps = getSteps(t);

  return (
    <section className="container flex flex-col gap-[50px] pt-[112px]">
      <Title className="text-center text-[60px] leading-[60px] tracking-[-1.2px]">
        {t('title', { fallback: 'Exchange with Experts' })}
      </Title>
      <ul className="flex border-y border-y-white/50 max-md:flex-col max-md:gap-8">
        {steps.map((step, index) => (
          <Step key={index} step={step} number={`0${++index}`} />
        ))}
      </ul>
      <Button variant="faded" size="xl" className="mx-auto px-[64px] font-bold">
        {t('button', { fallback: 'Join Us' })}
      </Button>
      <Image
        className="mx-auto h-[958px] w-full object-cover max-md:h-[280px]"
        src="/images/inside/rocket.png"
        alt="rocket"
        width={1000}
        height={958}
        priority
        unoptimized
      />
    </section>
  );
};

const Step = ({ step, number }: { step: string; number: string }) => (
  <li className="flex flex-col gap-4 border-r border-r-white/50 py-5 pl-8 text-center max-md:mx-10 max-md:px-0">
    <Text
      className="text-[100px] tracking-(--letter-spacing--2,-2px)"
      weight={200}
    >
      {number}
    </Text>
    <Text size="lg" weight={200}>
      {step}
    </Text>
  </li>
);
