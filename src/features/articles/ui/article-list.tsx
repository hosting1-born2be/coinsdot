'use client';

import type { ReactNode } from 'react';

import { ArticleText } from './article-text';

export const ArticleList = ({ values }: { values: ReactNode[] }) => (
  <ul className="list-disc pl-6">
    {values.map((value, i) => (
      <li key={i}>
        <ArticleText>{value}</ArticleText>
      </li>
    ))}
  </ul>
);
