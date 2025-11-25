'use client';

import { useTranslations } from 'next-intl';

import { cn } from '@/shared/lib/utils/cn';
import { Text } from '@/shared/ui/kit/text';

export const Notice = ({ className }: { className?: string }) => {
  const t = useTranslations('notice');

  return (
    <section className={cn('relative bg-[#120A34] py-2.5', className)}>
      <div className="container flex gap-10 max-md:flex-col max-md:gap-2.5">
        <Text size="lg" weight={600}>
          {t('title', { fallback: 'Notice' })}
        </Text>
        <Text>
          {t('text.0', {
            fallback:
              'Coinsdot.io services are not available to users based in the United Kingdom. If you are accessing this website from the UK, please exit the site.',
          })}
          <br />
          {t('text.1', {
            fallback:
              'At this time, our services are not accessible to Retail Clients residing in the UK.',
          })}
        </Text>
      </div>
    </section>
  );
};
