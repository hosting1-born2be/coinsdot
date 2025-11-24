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
  },
  twitter: {
    title: 'User Essentials | Coinsdot',
    description:
      'Learn how to register, verify your identity, and manage your wallet to exchange crypto to fiat and vice versa.',
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
