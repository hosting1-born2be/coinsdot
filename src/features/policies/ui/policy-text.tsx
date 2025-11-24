'use client';

import { cn } from '@/shared/lib/utils/cn';
import { Text } from '@/shared/ui/kit/text';

export const PolicyText = ({
  children,
  className,
  flex = false,
  bold = false,
}: {
  children: React.ReactNode;
  className?: string;
  flex?: boolean;
  bold?: boolean;
}) => {
  return (
    <Text
      size="lg"
      weight={bold ? 700 : 200}
      className={cn(flex && 'flex gap-2', className)}
    >
      {children}
    </Text>
  );
};
