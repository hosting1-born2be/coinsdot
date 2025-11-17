'use client';

import { useState } from 'react';
import { useTranslations } from 'next-intl';
import {
  Content,
  Description,
  Overlay,
  Portal,
  Root,
  Title as DialogTitle,
  Trigger,
} from '@radix-ui/react-dialog';

import { Link } from '@/i18n/navigation';

import { Button } from '@/shared/ui/kit/button';
import { Text } from '@/shared/ui/kit/text';
import { Title } from '@/shared/ui/kit/title';

export const ImportantNotice = () => {
  const [isOpen, setIsOpen] = useState(true);

  const t = useTranslations('importantNotice');

  return (
    <Root open={isOpen} onOpenChange={setIsOpen}>
      <Trigger />
      <Portal>
        <Overlay className="fixed inset-0 z-50 bg-black/40 backdrop-blur-sm" />
        <Content
          onOpenAutoFocus={e => e.preventDefault()}
          onCloseAutoFocus={e => e.preventDefault()}
          className="fixed top-1/2 left-1/2 z-60 flex w-[557px] -translate-x-1/2 -translate-y-1/2 flex-col rounded-2xl bg-[#F0F2F7] focus:outline-none max-lg:w-[96%]"
        >
          <DialogTitle />
          <Description asChild>
            <section className="relative flex w-full flex-col gap-3 overflow-hidden p-5 max-lg:min-h-[94vh] max-lg:overflow-y-auto">
              <Title as="h4" size="lg" color="azure">
                {t('title', { fallback: 'Important Notice' })}
              </Title>
              <Text color="azure">
                {t('text.0', { fallback: 'By using' })}{' '}
                <Link href="/" className="underline">
                  Coinsdot.io
                </Link>
                ,{' '}
                {t('text.1', {
                  fallback:
                    'you confirm that you understand the risks linked to buying or selling cryptocurrency. Digital asset transactions can be volatile, and it’s important to be fully aware before proceeding. For details, please review our risk disclosure.',
                })}
                <br />
                <br />
                {t('text.2', {
                  fallback:
                    'Once an order is confirmed, it cannot be changed or reversed. Please make sure your personal details and wallet address are entered correctly before completing your transaction.',
                })}
              </Text>
              <div className="flex items-center gap-1 pt-3">
                <Button
                  variant="outline"
                  size="md"
                  rounded="xl"
                  onClick={() => setIsOpen(false)}
                  fullWidth
                >
                  {t('buttons.rejectAll', { fallback: 'Reject All' })}
                </Button>
                <Button
                  variant="fill"
                  size="md"
                  rounded="xl"
                  onClick={() => setIsOpen(false)}
                  fullWidth
                >
                  {t('buttons.acceptAll', { fallback: 'Accept All' })}
                </Button>
              </div>
            </section>
          </Description>
        </Content>
      </Portal>
    </Root>
  );
};
