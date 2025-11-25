'use client';

import Image from 'next/image';
import { useTranslations } from 'next-intl';

import { Title } from '@/shared/ui/kit/title';

export const CryptoJourney = () => {
  const t = useTranslations('contacts.cryptoJourney');

  return (
    <section className="container flex flex-col gap-[50px] pt-[112px]">
      <Title className="text-center text-[60px] leading-[60px] tracking-[-1.2px] max-md:text-[36px] max-md:leading-[120%] max-md:tracking-[-0.72px]">
        {t('title.0', { fallback: 'We are here for your crypto journey!' })}{' '}
        <br />
        {t('title.1', { fallback: 'Every step of the way.' })}
      </Title>
      <div className="relative flex h-[960px] max-md:h-[300px]">
        <Image
          className="object-cover"
          src="/images/contacts/footer.png"
          alt="footer"
          fill
          unoptimized
        />
      </div>
    </section>
  );
};
