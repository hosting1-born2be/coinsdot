'use client';

import { useTranslations } from 'next-intl';

import { motion, type Transition } from '@/shared/lib/motion';
import { CircleEurIcon } from '@/shared/ui/icons/circle-eur';
import { Button } from '@/shared/ui/kit/button';
import { Title } from '@/shared/ui/kit/title';

export const Hero = () => {
  const t = useTranslations('home.hero');

  return (
    <section className="relative flex h-[93vh] flex-col pb-[90px]">
      <div className="absolute inset-0 h-full w-full">
        <video
          src="/videos/home/hero.mp4"
          className="h-full w-full object-cover"
          autoPlay
          muted
          loop
        />
        <div
          className="absolute inset-0"
          style={{
            background:
              'linear-gradient(180deg, rgba(0, 0, 0, 0.00) 0%, #000 100%)',
          }}
        ></div>
      </div>
      <div className="relative z-10 mt-auto flex flex-col items-center gap-6">
        <Title
          as="h1"
          weight={700}
          className="text-center text-[96px] leading-[96px] tracking-[-1.44px] max-md:text-[36px] max-md:leading-[120%] max-md:tracking-[var(--letter-spacing--0_75,-0.749px)]"
        >
          {t('title.0', { fallback: 'Coinsdot.' })}
          <br />
          <span className="font-extralight">
            {t('title.1', { fallback: 'Where Crypto Meets Fiat.' })}
          </span>
        </Title>
        <PulsingButton />
      </div>
    </section>
  );
};

const pulseAnimation = {
  scale: [1, 1.2, 1],
  opacity: [0.6, 0, 0.6],
};

const pulseTransition: Transition = {
  duration: 2,
  repeat: Infinity,
  ease: 'easeInOut',
};

const PulsingButton = () => {
  const t = useTranslations('home.hero');

  return (
    <div className="relative flex items-center justify-center">
      <motion.div
        className="absolute h-[152px] w-[397px] rounded-full bg-[rgba(41,54,86,0.25)] max-md:h-[105px] max-md:w-[277px]"
        animate={pulseAnimation}
        transition={pulseTransition}
      />
      <motion.div
        className="absolute h-[109px] w-[277px] rounded-full bg-[rgba(41,54,86,0.25)] max-md:h-[83px] max-md:w-[208px]"
        animate={pulseAnimation}
        transition={pulseTransition}
      />
      <div className="relative">
        <Button
          size="lg"
          variant="secondary"
          className="flex items-center gap-2"
        >
          {t('button', { fallback: 'Start Now' })}
          <CircleEurIcon className="max-md:h-[65px] max-md:w-[65px]" />
        </Button>
      </div>
    </div>
  );
};
