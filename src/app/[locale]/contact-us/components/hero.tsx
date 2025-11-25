'use client';

import Image from 'next/image';
import { useTranslations } from 'next-intl';

import { Button } from '@/shared/ui/kit/button';
import { Text } from '@/shared/ui/kit/text';
import { Title } from '@/shared/ui/kit/title';

export const Hero = () => {
  const t = useTranslations('contacts.hero');

  return (
    <section className="relative h-[429px] max-md:h-[500px]">
      <Image
        className="object-cover"
        src="/images/contacts/hero.jpg"
        alt="hero"
        fill
        unoptimized
      />
      <Image
        className="absolute inset-0 bottom-0 z-10 h-[429px] w-full object-cover max-md:h-[500px]"
        src="/images/contacts/faded.svg"
        alt="faded"
        width={1400}
        height={429}
        unoptimized
      />
      <div className="container flex h-full items-end max-md:px-10!">
        <section className="flex w-full justify-between gap-2.5 max-lg:flex-col max-lg:items-center max-lg:justify-center max-lg:text-center">
          <div className="flex flex-col gap-2.5 pb-10">
            <Title
              as="h1"
              className="z-20 text-[96px] leading-[96px] tracking-[-1.44px] max-md:text-[36px] max-md:leading-[120%] max-md:tracking-[-0.72px]"
            >
              {t('heading', { fallback: 'Always Here to Help' })}
            </Title>
            <Text size="lg" className="z-20">
              {t('description', {
                fallback:
                  'Have questions or issues? Reach out. We’re just a message away!',
              })}
            </Text>
          </div>
          <Button
            variant="faded"
            size="xl"
            className="z-20 w-[300px] text-lg font-bold max-md:h-[52px] max-md:w-full max-md:justify-center max-md:text-sm"
          >
            {t('button', { fallback: 'Open Helpdesk' })}
          </Button>
        </section>
      </div>
    </section>
  );
};
