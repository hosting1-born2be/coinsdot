'use client';

import { useEffect, useRef, useState } from 'react';
import { useTranslations } from 'next-intl';

import { cn } from '@/shared/lib/utils/cn';
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

const PulsingButton = () => {
  const t = useTranslations('home.hero');
  const btnRef = useRef<HTMLButtonElement | null>(null);
  const [btnWidth, setBtnWidth] = useState(0);

  useEffect(() => {
    if (!btnRef.current) return;

    const handleResize = () => {
      setBtnWidth(btnRef.current!.offsetWidth);
    };

    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <div
      className="group relative flex items-center justify-center"
      style={
        {
          '--btn-width': `${btnWidth}px`,
        } as React.CSSProperties
      }
    >
      <span
        className={cn(
          'pulse-large pointer-events-none absolute rounded-full bg-[rgba(41,54,86,0.25)]',
        )}
        aria-hidden
      />

      <span
        className="pulse-small pointer-events-none absolute rounded-full bg-[rgba(41,54,86,0.25)]"
        aria-hidden
      />

      <div className="relative">
        <Button
          ref={btnRef}
          size="lg"
          variant="secondary"
          className="relative z-30 flex items-center gap-2"
        >
          {t('button', { fallback: 'Start Now' })}
          <CircleEurIcon className="max-md:h-[65px] max-md:w-[65px]" />
        </Button>
      </div>
    </div>
  );
};
