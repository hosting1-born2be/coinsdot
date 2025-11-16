'use client';

import Image from 'next/image';
import { useTranslations } from 'next-intl';

import { IconLayout } from '@/shared/ui/components/icon-layout';
import { UsdtCircleIcon } from '@/shared/ui/icons/usdt-circle';
import { Button } from '@/shared/ui/kit/button';
import { Text } from '@/shared/ui/kit/text';
import { Title } from '@/shared/ui/kit/title';

const getSteps = (t: ReturnType<typeof useTranslations>) => [
  t('steps.0', { fallback: 'Create your account in minutes' }),
  t('steps.1', { fallback: 'Confirm your identity with quick verification' }),
  t('steps.2', { fallback: 'Choose currency, crypto and go!' }),
];

export const HowGetStarted = () => {
  const t = useTranslations('home.howGetStarted');

  const steps = getSteps(t);

  return (
    <section className="container flex flex-col items-center gap-[50px] py-[112px]">
      <Title as="h2" className="text-center">
        {t('title', { fallback: 'How to get started' })}
      </Title>
      <ul className="flex border-y border-y-white/50 max-md:flex-col max-md:gap-8">
        {steps.map((step, index) => (
          <Step key={index} step={step} number={`0${++index}`} />
        ))}
      </ul>
      <Button variant="faded" size="lg" className="px-[64px]">
        {t('button', { fallback: 'Register' })}
      </Button>
      <section className="flex gap-2.5 max-md:flex-col">
        <Tip />
        <ImportantNotice />
      </section>
    </section>
  );
};

const Step = ({ step, number }: { step: string; number: string }) => (
  <li className="flex flex-col gap-4 border-r border-r-white/50 py-5 pl-8 max-md:mx-10 max-md:px-0">
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

const Tip = () => {
  const t = useTranslations('home.howGetStarted.tip');

  return (
    <section className="bg-grey-95 relative flex w-[65%] overflow-hidden rounded-3xl p-8 max-md:h-[484px] max-md:w-full">
      <Image
        className="absolute -top-36 -left-[34%] max-[1280px]:-left-[50%] max-md:-top-24 max-md:-left-[40%]"
        src="/images/home/started-coin.png"
        alt="Started Coin"
        width={605}
        height={605}
      />
      <div className="ml-auto flex w-[70%] items-center gap-10 max-md:mt-auto max-md:w-full max-md:flex-col max-md:items-start">
        <section className="flex flex-col gap-4">
          <div className="flex gap-4">
            <IconLayout>
              <UsdtCircleIcon />
            </IconLayout>
            <Title size="4xl" as="h3" color="black">
              {t('title', { fallback: 'Tip' })}
            </Title>
          </div>
          <Text color="black">
            {t('text', {
              fallback:
                'For a smoother start, check our User Essentials section – it explains the requirements and helps you complete registration and verification faster.',
            })}
          </Text>
        </section>
        <Button
          variant="primary"
          size="md"
          className="max-md:w-full max-md:justify-center"
        >
          {t('button', { fallback: 'Check' })}
        </Button>
      </div>
    </section>
  );
};

const ImportantNotice = () => {
  const t = useTranslations('home.howGetStarted.importantNotice');

  return (
    <section className="flex w-[35%] flex-col gap-3 overflow-hidden rounded-3xl bg-[#293656] p-8 text-center max-md:w-full">
      <Text size="lg" weight={600} color="white">
        {t('title', { fallback: 'Important notice on processing time!' })}
      </Text>
      <Text color="white" size="sm">
        {t('text', {
          fallback:
            'Most transactions are processed instantly, but timing can depend on the blockchain network and required compliance checks. Coinsdot ensures your transaction is processed in the most reliable way, so you get funds without unnecessary delays.',
        })}
      </Text>
    </section>
  );
};
