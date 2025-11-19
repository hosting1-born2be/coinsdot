'use client';

import { useTranslations } from 'next-intl';

import { IconLayout } from '@/shared/ui/components/icon-layout';
import { BtcIcon } from '@/shared/ui/icons/btc';
import { EthIcon } from '@/shared/ui/icons/eth';
import { InfoIcon } from '@/shared/ui/icons/info';
import { Button } from '@/shared/ui/kit/button';
import { Text } from '@/shared/ui/kit/text';

export const ImportantMessage = () => {
  const t = useTranslations('userEssentials.importantMessage');

  return (
    <div className="mx-1 rounded-3xl bg-[#293656] p-8 max-md:mx-0">
      <section className="container flex gap-3 max-lg:flex-col max-lg:gap-10">
        <div className="flex w-[60%] flex-col gap-4 max-lg:w-full">
          <section className="flex gap-4 max-md:items-center">
            <IconLayout>
              <InfoIcon />
            </IconLayout>
            <Text size="4xl" className="max-md:text-[24px]">
              {t('title', { fallback: 'Important Message on Wallets' })}
            </Text>
          </section>
          <Text>
            <span className="font-bold">
              {t('text.0', { fallback: 'Please note:' })}
            </span>{' '}
            {t('text.1', {
              fallback: 'Coinsdot does not provide custody of crypto or fiat.',
            })}
            <br />
            <br />
            {t('text.2', {
              fallback: 'We operate solely as an exchange service.',
            })}
            <br />
            {t('text.3', {
              fallback:
                'To manage your assets securely, you may consider creating personal wallets via:',
            })}
          </Text>
        </div>
        <div className="flex w-[40%] gap-8 max-lg:w-full max-md:flex-col max-md:gap-2.5">
          <Button
            size="xl"
            variant="primary"
            className="min-h-[105px] w-full flex-1"
          >
            Bitcoin
            <BtcIcon />
          </Button>

          <Button
            size="xl"
            variant="faded"
            className="min-h-[105px] w-full flex-1"
          >
            Ethereum
            <EthIcon />
          </Button>
        </div>
      </section>
    </div>
  );
};
