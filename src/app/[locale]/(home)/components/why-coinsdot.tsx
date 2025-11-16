'use client';

import { useEffect, useState } from 'react';
import { useTranslations } from 'next-intl';

import type { Transition } from '@/shared/lib/motion';
import { motion } from '@/shared/lib/motion';
import { cn } from '@/shared/lib/utils/cn';
import { NextCircleIcon } from '@/shared/ui/icons/next-circle';
import { Button } from '@/shared/ui/kit/button';
import { Text } from '@/shared/ui/kit/text';
import { Title } from '@/shared/ui/kit/title';

const SLIDE_DURATION = 4000;

const getSlides = (t: ReturnType<typeof useTranslations>) => [
  {
    title: t('slides.0.title', { fallback: 'Simple by Design' }),
    text: t('slides.0.text', {
      fallback:
        'From sign-up to exchange – everything is clear, minimal, and easy to follow.',
    }),
  },
  {
    title: t('slides.1.title', { fallback: 'Fast Results' }),
    text: t('slides.1.text', {
      fallback:
        'Transactions are processed quickly, with no unnecessary steps in between.',
    }),
  },
  {
    title: t('slides.2.title', { fallback: 'Support That Cares' }),
    text: t('slides.2.text', {
      fallback:
        'Our team is here to answer, guide, and resolve – whenever you need us.',
    }),
  },
];

export const WhyCoinsdot = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  const t = useTranslations('home.whyCoinsdot');
  const slides = getSlides(t);

  useEffect(() => {
    const timer = setTimeout(() => {
      setActiveIndex(i => (i + 1) % slides.length);
    }, SLIDE_DURATION);

    return () => clearTimeout(timer);
  }, [activeIndex, slides.length]);

  return (
    <section className="container">
      <div className="flex h-[704px] rounded-3xl bg-[#120A34] p-2 max-lg:h-auto max-lg:flex-col">
        <section className="flex w-1/2 flex-col justify-between p-8 max-lg:w-full max-lg:flex-col max-lg:gap-5 max-md:px-2">
          <Title className="text-[96px] leading-[96px] tracking-[-1.44px] max-md:text-[60px] max-md:leading-[110%] max-md:tracking-[-1.2px]">
            {t('title.0', { fallback: 'Why' })} <br />{' '}
            <span className="font-bold">
              {t('title.1', { fallback: 'Coinsdot' })}
            </span>
          </Title>
          <div className="flex flex-col gap-2.5">
            {slides.map((s, i) =>
              i === activeIndex ? (
                <ActiveSlide key={activeIndex} title={s.title} text={s.text} />
              ) : (
                <InactiveSlide key={i} title={s.title} />
              ),
            )}
          </div>
        </section>
        <section className="relative flex w-1/2 flex-col overflow-hidden rounded-3xl bg-black p-[30px] max-lg:h-[352px] max-lg:w-full">
          <video
            src="/videos/home/why.mp4"
            className="absolute inset-0 h-[704px] w-[661px] object-cover max-lg:h-[352px] max-lg:w-[661px]"
            autoPlay
            muted
            loop
          />
          <PulsingButton />
        </section>
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
  const t = useTranslations('home.whyCoinsdot');

  return (
    <div className="relative mt-auto ml-auto max-lg:hidden">
      <motion.div
        className="pointer-events-none absolute right-0 bottom-0 z-10 h-[96px] w-[318px] origin-right rounded-full bg-white/30"
        animate={pulseAnimation}
        transition={pulseTransition}
      />
      <motion.div
        className="pointer-events-none absolute right-0 bottom-0 z-10 h-[96px] w-[263px] origin-right rounded-full bg-white/50"
        animate={pulseAnimation}
        transition={pulseTransition}
      />
      <Button size="lg" variant="ghost" className="relative z-20">
        {t('button', { fallback: 'Get Started' })}
        <NextCircleIcon />
      </Button>
    </div>
  );
};

const ActiveSlide = ({ title, text }: { title: string; text: string }) => {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    let frame: number;
    const start = performance.now();

    const animate = (time: number) => {
      const elapsed = time - start;
      const percent = Math.min((elapsed / SLIDE_DURATION) * 100, 100);

      setProgress(percent);

      if (percent < 100) {
        frame = requestAnimationFrame(animate);
      }
    };

    frame = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(frame);
  }, []);

  return (
    <article className="flex flex-col gap-2.5">
      <Title
        as="h3"
        className="leading-[110%] tracking-[-1.2px] max-md:text-[36px] max-md:leading-[120%] max-md:tracking-[-0.749px]"
      >
        {title}
      </Title>
      <Text size="lg">{text}</Text>
      <div className="relative h-[3px] w-full overflow-hidden rounded-[62px] bg-white/30">
        <span
          className={cn(
            'absolute bottom-0 left-0 h-[3px] rounded-[62px] bg-white transition-none',
          )}
          style={{ width: `${progress}%` }}
        />
      </div>
    </article>
  );
};

const InactiveSlide = ({ title }: { title: string }) => (
  <Title
    as="h4"
    className="py-2 text-[36px] leading-[120%] tracking-[-0.749px] opacity-60"
  >
    {title}
  </Title>
);
