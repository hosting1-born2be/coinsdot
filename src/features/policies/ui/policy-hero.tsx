'use client';

import { cn } from '@/shared/lib/utils/cn';
import { Text } from '@/shared/ui/kit/text';
import { Title } from '@/shared/ui/kit/title';

export const PolicyHero = ({
  title,
  titleClassName,
  lastUpdated,
}: {
  title: string;
  titleClassName?: string;
  lastUpdated?: string;
}) => {
  return (
    <section className="relative container flex flex-col gap-2.5 overflow-hidden pt-[150px] pb-10 max-md:h-[250px] max-md:justify-end max-md:pt-0">
      <Title
        className={cn(
          'z-20 text-[96px] leading-[96px] tracking-[-1.44px] max-md:text-[36px] max-md:leading-[120%] max-md:tracking-[-0.72px]',
          titleClassName,
        )}
      >
        {title}
      </Title>
      {lastUpdated && (
        <Text size="lg" className="z-20">
          {lastUpdated}
        </Text>
      )}
    </section>
  );
};
