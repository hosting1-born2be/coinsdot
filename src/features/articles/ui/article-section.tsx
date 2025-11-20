'use client';

import type { ReactNode } from 'react';

import { Title } from '@/shared/ui/kit/title';

export const ArticleSection = ({
  title,
  children,
}: {
  title: string;
  children: ReactNode;
}) => {
  return (
    <section className="flex flex-col gap-2.5">
      <Title className="text-[40px] max-md:text-[24px]" weight={700}>
        {title}
      </Title>
      {children}
    </section>
  );
};
