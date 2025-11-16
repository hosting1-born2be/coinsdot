import { getTranslations } from 'next-intl/server';

import { ContactForm } from '@/features/contact-form/ui/contact-form';

import {
  AssistanceHub,
  ComplianceAndProtection,
  Hero,
  HowGetStarted,
  MeetCoinsdot,
  TrustedBy,
  WhyCoinsdot,
} from './components';

export default async function Home() {
  const t = await getTranslations('home.contactForm');

  return (
    <main>
      <Hero />
      <MeetCoinsdot />
      <HowGetStarted />
      <WhyCoinsdot />
      <TrustedBy />
      <ComplianceAndProtection />
      <AssistanceHub />
      <ContactForm
        heading={t('heading', { fallback: 'Our team is one form away!' })}
      />
    </main>
  );
}
