'use client';

import type { ReactNode } from 'react';

import { Text } from '@/shared/ui/kit/text';

export const ArticleText = ({ children }: { children: ReactNode }) => (
  <Text size="lg">{children}</Text>
);
