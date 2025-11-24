import { getTranslations } from 'next-intl/server';

import { ContactForm } from '@/features/contact-form/ui/contact-form';

import { Hero } from './components';

export default async function ContactsPage() {
  const t = await getTranslations('contacts');

  return (
    <main>
      <Hero />
      <ContactForm
        heading={t('heading', { fallback: 'Always Here to Help' })}
        description={t('description', {
          fallback:
            'Have questions or issues? Reach out. We’re just a message away!',
        })}
        noAlignHeading
      />
    </main>
  );
}
