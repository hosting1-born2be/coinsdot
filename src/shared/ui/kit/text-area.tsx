'use client';

import type { TextareaHTMLAttributes } from 'react';
import type { VariantProps } from 'class-variance-authority';
import { cva } from 'class-variance-authority';

import { cn } from '@/shared/lib/utils/cn';

const textFieldVariants = cva(
  'text-[#070D19] resize-none font-extralight text-base placeholder:text-[#070D19] transition duration-300 ease-in-out focus:outline-none',
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

export const TextArea = ({
  className,
  intent,
  hint,
  ...args
}: TextareaHTMLAttributes<HTMLTextAreaElement> & {
  hint?: string;
} & TextFieldVariants) => {
  return (
    <label
      className={cn(
        'relative flex w-full flex-col border-b border-b-[#111212] pb-4',
        hint && 'border-b-danger',
      )}
    >
      <textarea
        className={cn(textFieldVariants({ intent }), className)}
        {...args}
      />
    </label>
  );
};
