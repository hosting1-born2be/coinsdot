'use client';

import type { ReactNode } from 'react';

import { cn } from '@/shared/lib/utils/cn';

import { Text } from './text';

export const List = ({
  values,
  type = 'disc',
  className,
}: {
  values: ReactNode[];
  type?: 'disc' | 'decimal' | 'alpha';
  className?: string;
}) => {
  const listStyle = {
    disc: 'list-disc',
    decimal: 'list-decimal',
    alpha: 'list-[lower-alpha]',
  }[type];

  return (
    <ul
      className={cn(
        'flex flex-col gap-3 pl-5 text-xl font-light text-[rgba(179,179,181,0.50)]',
        className,
        listStyle,
      )}
    >
      {values.map((v, i) => (
        <li key={i}>
          <Text size="lg">{v}</Text>
        </li>
      ))}
    </ul>
  );
};
