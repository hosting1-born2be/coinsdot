'use client';

import { useState } from 'react';
import dynamic from 'next/dynamic';
import { useTranslations } from 'next-intl';
import { useForm } from '@tanstack/react-form';

import { Button } from '@/shared/ui/kit/button';
import { TextArea } from '@/shared/ui/kit/text-area';
import { TextField } from '@/shared/ui/kit/text-field';
import { Title } from '@/shared/ui/kit/title';

import { contactFormSchema } from '../model/schema';

const ThankYou = dynamic(
  () => import('./thank-you').then(mod => mod.ThankYou),
  {
    ssr: false,
  },
);

export const ContactForm = ({ heading }: { heading: string }) => {
  const [isOpen, setIsOpen] = useState(false);

  const t = useTranslations('contactForm');

  const { Field, Subscribe, handleSubmit, reset } = useForm({
    defaultValues: {
      contactPerson: '',
      email: '',
      company: '',
      phone: '',
      request: '',
    },
    validators: {
      onChange: contactFormSchema,
    },
    onSubmit: values => {
      console.log(values.value);
      reset();
      setIsOpen(true);
    },
  });

  return (
    <section className="container flex rounded-3xl bg-[#120A34] p-2 max-lg:flex-col">
      <div className="ml-auto flex w-1/2 flex-col p-10 max-lg:w-full">
        <Title className="text-[96px] leading-[100%] tracking-[-0.09em] max-lg:text-[60px] max-lg:leading-[100%] max-lg:tracking-[-0.06em]">
          {heading}
        </Title>
      </div>
      <form
        onSubmit={e => {
          e.preventDefault();
          e.stopPropagation();
          handleSubmit().catch(console.error);
        }}
        className="flex w-1/2 flex-col justify-between gap-6 rounded-2xl bg-[#F0F2F7] p-8 max-lg:w-full max-md:gap-8"
      >
        <FormRow>
          <Field name="contactPerson">
            {field => (
              <TextField
                name={field.name}
                placeholder={t('contactPerson', { fallback: 'Contact Person' })}
                value={String(field.state.value)}
                onBlur={field.handleBlur}
                onChange={e => field.handleChange(e.target.value)}
                intent={field.state.meta.errors.length ? 'danger' : 'primary'}
                hint={field.state.meta.errors
                  .map(error => error?.message)
                  .join(', ')}
              />
            )}
          </Field>
          <Field name="company">
            {field => (
              <TextField
                name={field.name}
                placeholder={t('company', { fallback: 'Company' })}
                value={String(field.state.value)}
                onBlur={field.handleBlur}
                onChange={e => field.handleChange(e.target.value)}
                intent={field.state.meta.errors.length ? 'danger' : 'primary'}
                hint={field.state.meta.errors
                  .map(error => error?.message)
                  .join(', ')}
              />
            )}
          </Field>
        </FormRow>
        <FormRow>
          <Field name="phone">
            {field => (
              <TextField
                name={field.name}
                placeholder={t('phone', { fallback: 'Phone' })}
                value={String(field.state.value)}
                onBlur={field.handleBlur}
                onChange={e => field.handleChange(e.target.value)}
                intent={field.state.meta.errors.length ? 'danger' : 'primary'}
                hint={field.state.meta.errors
                  .map(error => error?.message)
                  .join(', ')}
              />
            )}
          </Field>
          <Field name="email">
            {field => (
              <TextField
                name={field.name}
                placeholder={t('email', { fallback: 'Email' })}
                value={String(field.state.value)}
                onBlur={field.handleBlur}
                onChange={e => field.handleChange(e.target.value)}
                intent={field.state.meta.errors.length ? 'danger' : 'primary'}
                hint={field.state.meta.errors
                  .map(error => error?.message)
                  .join(', ')}
              />
            )}
          </Field>
        </FormRow>
        <Field name="request">
          {field => (
            <TextArea
              name={field.name}
              placeholder={t('request', { fallback: 'Your request' })}
              value={String(field.state.value)}
              onBlur={field.handleBlur}
              onChange={e => field.handleChange(e.target.value)}
              intent={field.state.meta.errors.length ? 'danger' : 'primary'}
              hint={field.state.meta.errors
                .map(error => error?.message)
                .join(', ')}
            />
          )}
        </Field>
        <Subscribe selector={state => [state.canSubmit, state.isSubmitting]}>
          {([canSubmit, isSubmitting]) => (
            <Button
              disabled={!canSubmit}
              type="submit"
              size="xl"
              variant="primary"
              className="ml-auto w-[214px]"
            >
              {isSubmitting
                ? t('sending', { fallback: 'Sending...' })
                : t('send', { fallback: 'Send' })}
            </Button>
          )}
        </Subscribe>
      </form>
      <ThankYou isOpen={isOpen} setIsOpen={setIsOpen} />
    </section>
  );
};

const FormRow = ({ children }: { children: React.ReactNode }) => {
  return <div className="flex gap-5 max-md:flex-col">{children}</div>;
};
