'use client';

import Image from 'next/image';
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

import { Button } from '@/shared/ui/kit/button';
import { Text } from '@/shared/ui/kit/text';
import { Title } from '@/shared/ui/kit/title';

export const ThankYou = ({
  isOpen,
  setIsOpen,
}: {
  isOpen: boolean;
  setIsOpen: (isOpen: boolean) => void;
}) => {
  const t = useTranslations('thankYou');

  return (
    <Root open={isOpen} onOpenChange={setIsOpen}>
      <Trigger />
      <Portal>
        <Overlay className="fixed inset-0 z-50 bg-black/40 backdrop-blur-sm" />
        <Content
          onOpenAutoFocus={e => e.preventDefault()}
          onCloseAutoFocus={e => e.preventDefault()}
          className="fixed top-1/2 left-1/2 z-60 flex w-[800px] -translate-x-1/2 -translate-y-1/2 flex-col rounded-3xl bg-black focus:outline-none max-lg:w-[96%]"
        >
          <DialogTitle />
          <Description asChild>
            <section className="relative flex w-full flex-col gap-[56px] overflow-hidden p-12 max-lg:h-[94vh] max-lg:overflow-y-auto">
              <div className="z-10 flex flex-col gap-2">
                <Title
                  as="h4"
                  className="text-[96px] leading-[100%] tracking-[-0.09em] max-md:text-[60px] max-md:leading-[100%] max-md:tracking-[-0.06em]"
                >
                  {t('title', { fallback: 'Thank you!' })}
                </Title>
                <Text size="2xl" className="leading-[130%] tracking-[-0.458px]">
                  {t('text.0', {
                    fallback: 'Your request has been submitted successfully.',
                  })}
                  <br />
                  {t('text.1', { fallback: 'Our team is on the way' })} <br />
                  {t('text.2', {
                    fallback: 'to assist you and will get back to you shortly.',
                  })}
                </Text>
              </div>
              <Button
                size="xl"
                variant="faded"
                className="z-10 max-md:w-full max-md:justify-center"
              >
                {t('button', { fallback: 'Return to home page' })}
              </Button>
              <Image
                className="absolute right-0 bottom-0 max-md:hidden"
                src="/images/thanks.jpg"
                alt="Thank you"
                width={800}
                height={800}
                unoptimized
              />
              <Image
                className="absolute bottom-0 left-1/2 hidden -translate-x-1/2 max-md:block"
                src="/images/thanks-mobile.jpg"
                alt="Thank you"
                width={479}
                height={479}
                unoptimized
              />
            </section>
          </Description>
        </Content>
      </Portal>
    </Root>
  );
};
