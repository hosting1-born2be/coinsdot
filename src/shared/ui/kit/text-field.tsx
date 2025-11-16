'use client';

import type { InputHTMLAttributes } from 'react';
import type { VariantProps } from 'class-variance-authority';
import { cva } from 'class-variance-authority';

import { cn } from '@/shared/lib/utils/cn';
import { Text } from '@/shared/ui/kit/text';

const textFieldVariants = cva(
  'text-[#070D19] text-base font-extralight placeholder:text-[#070D19] transition duration-300 ease-in-out focus:outline-none',
  {
    variants: {
      intent: {
        primary: '',
        danger: 'text-danger',
      },
    },
    defaultVariants: {
      intent: 'primary',
    },
  },
);

export type TextFieldVariants = VariantProps<typeof textFieldVariants>;

export const TextField = ({
  className,
  intent,
  hint,
  ...args
}: InputHTMLAttributes<HTMLInputElement> & {
  hint?: string;
} & TextFieldVariants) => {
  return (
    <label
      className={cn(
        'relative flex w-full flex-col border-b border-b-[#111212] pb-4',
        hint && 'border-b-danger',
      )}
    >
      <div className="absolute top-full left-0 mt-1">
        <Text size="xs" color="danger" className="align-top">
          {hint}
        </Text>
      </div>
      <input
        className={cn(textFieldVariants({ intent }), className)}
        {...args}
      />
    </label>
  );
};
