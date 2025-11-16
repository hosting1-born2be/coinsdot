'use client';

import Image from 'next/image';
import { useTranslations } from 'next-intl';

import { Link } from '@/i18n/navigation';

import { Button } from '@/shared/ui/kit/button';
import { Text } from '@/shared/ui/kit/text';
import { Title } from '@/shared/ui/kit/title';

export const AssistanceHub = () => {
  const t = useTranslations('home.assistanceHub');

  return (
    <section className="container flex flex-col gap-[50px] pt-[112px] max-md:gap-8">
      <div className="flex flex-col gap-2.5">
        <Title color="white" className="text-center max-md:text-[36px]">
          {t('title', { fallback: 'Our assistance hub' })}
        </Title>
        <Text size="lg" color="white" className="text-center opacity-50">
          {t('text', {
            fallback:
              'We know crypto feels frustrating — that’s why we’ve prepared resources to make things easier.',
          })}
        </Text>
      </div>
      <div className="mx-auto flex items-center gap-8 max-md:mx-0 max-md:flex-col">
        <Link href="/qa" className="max-md:w-full">
          <Button
            size="lg"
            variant="primary"
            className="w-[214px] px-8 font-bold max-md:h-[100px] max-md:w-full max-md:justify-center"
          >
            {t('button.0', { fallback: 'Q&A' })}
          </Button>
        </Link>
        <Link href="/crypto-insights" className="max-md:w-full">
          <Button
            variant="faded"
            size="lg"
            className="w-[214px] px-8 font-bold max-md:h-[100px] max-md:w-full max-md:justify-center"
          >
            {t('button.1', { fallback: 'News & Insights' })}
          </Button>
        </Link>
      </div>
      <Image
        className="h-[960px] w-full object-cover max-md:h-[260px]"
        src="/images/home/assist-hub.png"
        alt="Assistance Hub"
        width={1440}
        height={960}
        unoptimized
      />
    </section>
  );
};
