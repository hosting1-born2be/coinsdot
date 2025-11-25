import type { Metadata } from 'next';

import { CryptoJourney, Hero, ResourceHub } from './components';

export const metadata: Metadata = {
  title: 'Contacts | Coinsdot',
  description:
    'Get in touch with Coinsdot for support, inquiries, or assistance with exchange of crypto. Reach out and receive fast, helpful guidance.',
  openGraph: {
    title: 'Contacts | Coinsdot',
    description:
      'Get in touch with Coinsdot for support, inquiries, or assistance with exchange of crypto. Reach out and receive fast, helpful guidance.',
  },
  twitter: {
    title: 'Contacts | Coinsdot',
    description:
      'Get in touch with Coinsdot for support, inquiries, or assistance with exchange of crypto. Reach out and receive fast, helpful guidance.',
  },
};

export default async function ContactsPage() {
  return (
    <main>
      <Hero />
      <ResourceHub />
      <CryptoJourney />
    </main>
  );
}
