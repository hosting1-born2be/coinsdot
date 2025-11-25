import type { Metadata } from 'next';

import {
  DocumentsCannotAccept,
  Hero,
  HowToExchange,
  ImportantMessage,
  VerificationPackage,
} from './components';

export const metadata: Metadata = {
  title: 'User Essentials | Coinsdot',
  description:
    'Learn how to register, verify your identity, and manage your wallet to exchange crypto to fiat and vice versa.',
  openGraph: {
    title: 'User Essentials | Coinsdot',
    description:
      'Learn how to register, verify your identity, and manage your wallet to exchange crypto to fiat and vice versa.',
    images: ['https://coinsdot.io/meta.jpg'],
  },
  twitter: {
    title: 'User Essentials | Coinsdot',
    description:
      'Learn how to register, verify your identity, and manage your wallet to exchange crypto to fiat and vice versa.',
    images: ['https://coinsdot.io/meta.jpg'],
  },
};

export default function UserEssentialsPage() {
  return (
    <main>
      <Hero />
      <HowToExchange />
      <VerificationPackage />
      <DocumentsCannotAccept />
      <ImportantMessage />
    </main>
  );
}
