'use client';

import type { ReactNode } from 'react';
import Image from 'next/image';
import { useTranslations } from 'next-intl';

import { cn } from '@/shared/lib/utils/cn';
import { Button } from '@/shared/ui/kit/button';

export const ArticleContent = ({
  children,
  imgUrl,
  imgClassName,
}: {
  children: ReactNode;
  imgUrl: string;
  imgClassName?: string;
}) => {
  return (
    <article className="container flex gap-10 rounded-3xl bg-[#120A34] p-2 max-lg:flex-col">
      <Image
        className={cn(
          'h-auto w-[300px] shrink-0 rounded-3xl object-cover max-lg:h-[400px] max-lg:w-full max-lg:shrink-0',
          imgClassName,
        )}
        src={imgUrl}
        alt="article"
        width={678}
        height={584}
        unoptimized
      />
      <section className="flex flex-col gap-8 p-6">
        {children}
        <EndButtons />
      </section>
    </article>
  );
};

const EndButtons = () => {
  const t = useTranslations('articles.buttons');

  return (
    <div className="flex gap-9">
      <Button size="xl" variant="primary" className="w-[205px] font-bold">
        {t('joinNow', { fallback: 'Join Now' })}
      </Button>
      <Button size="xl" variant="faded" className="w-[225px] font-bold">
        {t('contactUs', { fallback: 'Contact Us' })}
      </Button>
    </div>
  );
};
