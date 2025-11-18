'use client';

import { useTranslations } from 'next-intl';

import { Divider } from '@/shared/ui/kit/divider';
import { Text } from '@/shared/ui/kit/text';
import { Title } from '@/shared/ui/kit/title';

export const WhoWeAre = () => {
  const t = useTranslations('insideCoinsdot.whoWeAre');

  return (
    <section className="m-1 rounded-3xl bg-white p-2">
      <div className="container flex max-lg:flex-col">
        <section className="flex w-1/2 flex-col justify-between p-8 max-lg:w-full max-lg:gap-10 max-md:px-2">
          <Title
            color="black"
            className="text-[96px] leading-[96px] tracking-[-1.44px] max-md:text-[60px] max-md:leading-[110%] max-md:tracking-[-1.2px]"
          >
            {t('title', { fallback: 'Who We Are' })}
          </Title>
          <div className="flex flex-col gap-5">
            <Text color="black" size="lg" className="max-md:text-sm">
              {t('text.0', {
                fallback:
                  'Coinsdot is built by a team of crypto and technology professionals united by a single vision: to make digital assets practical in everyday life.',
              })}
            </Text>
            <Text color="black" size="lg" className="max-md:text-sm">
              {t('text.1', {
                fallback:
                  'With backgrounds across finance, compliance, and technology, we bring expertise that ensures every transaction is fast, transparent, and aligned with global standards.',
              })}
            </Text>
          </div>
        </section>
        <section className="relative flex h-[704px] w-1/2 flex-col gap-2.5 overflow-hidden rounded-2xl bg-black p-10 max-lg:w-full max-md:h-[500px] max-md:px-2">
          <Text size="lg" className="z-10">
            {t('focus', { fallback: 'Our focus:' })}
          </Text>
          <Divider />
          <Text
            size="4xl"
            className="z-10 text-[40px] leading-[48px] tracking-[-0.832px] max-md:text-[24px] max-md:leading-[31px] max-md:tracking-[-0.45px]"
          >
            {t('focusText', {
              fallback:
                'Delivering a straightforward platform for converting Bitcoin and Ethereum to fiat currencies, and back again.',
            })}
          </Text>
          <video
            src="/videos/home/why.mp4"
            className="absolute -bottom-[40%] left-1/2 h-full w-full -translate-x-1/2 object-cover"
            autoPlay
            muted
            loop
          />
        </section>
      </div>
    </section>
  );
};
