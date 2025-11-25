import type { Metadata } from 'next';

import { Answers, Hero } from './components';

export const metadata: Metadata = {
  title: 'Q&A – Crypto Exchange | Coinsdot',
  description:
    'Get answers to common questions about exchanging crypto to fiat. Learn how to use Coinsdot, manage wallets, complete KYC, and process payments securely.',
  openGraph: {
    title: 'Q&A – Crypto Exchange | Coinsdot',
    description:
      'Get answers to common questions about exchanging crypto to fiat. Learn how to use Coinsdot, manage wallets, complete KYC, and process payments securely.',
    images: ['https://coinsdot.io/meta.jpg'],
  },
  twitter: {
    title: 'Q&A – Crypto Exchange | Coinsdot',
    description:
      'Get answers to common questions about exchanging crypto to fiat. Learn how to use Coinsdot, manage wallets, complete KYC, and process payments securely.',
    images: ['https://coinsdot.io/meta.jpg'],
  },
};

export default function QAPage() {
  return (
    <main>
      <Hero />
      <Answers />
    </main>
  );
}
