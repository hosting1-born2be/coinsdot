'use client';

import { Text } from '@/shared/ui/kit/text';
import { Title } from '@/shared/ui/kit/title';

export const ArticleHero = ({
  title,
  description,
}: {
  title: string;
  description: string;
}) => (
  <section className="container mx-10 flex flex-col gap-2.5 py-[112px] pb-10">
    <Title className="text-[96px] leading-[96px] tracking-[-1.44px] max-md:text-[36px] max-md:leading-[120%] max-md:tracking-[-0.72px]">
      {title}
    </Title>
    <Text size="lg" className="w-[80%] max-md:w-full">
      {description}
    </Text>
  </section>
);
