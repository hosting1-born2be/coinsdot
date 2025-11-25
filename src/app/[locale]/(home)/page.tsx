import type { Metadata } from 'next';

import {
  AssistanceHub,
  ComplianceAndProtection,
  Hero,
  HowGetStarted,
  MeetCoinsdot,
  TrustedBy,
  WhyCoinsdot,
} from './components';

export const metadata: Metadata = {
  title: 'Your Regulated Crypto Exchange  | Coinsdot',
  description:
    'Discover how to exchange Bitcoin and Ethereum for fiat, or vice versa. All transactions are processed in line with regulatory requirements, directly from your wallet.',
  openGraph: {
    title: 'Your Regulated Crypto Exchange  | Coinsdot',
    description:
      'Discover how to exchange Bitcoin and Ethereum for fiat, or vice versa. All transactions are processed in line with regulatory requirements, directly from your wallet.',
    images: ['https://coinsdot.io/meta.jpg'],
  },
  twitter: {
    title: 'Your Regulated Crypto Exchange  | Coinsdot',
    description:
      'Discover how to exchange Bitcoin and Ethereum for fiat, or vice versa. All transactions are processed in line with regulatory requirements, directly from your wallet.',
    images: ['https://coinsdot.io/meta.jpg'],
  },
};

export default function Home() {
  return (
    <main>
      <Hero />
      <MeetCoinsdot />
      <HowGetStarted />
      <WhyCoinsdot />
      <TrustedBy />
      <ComplianceAndProtection />
      <AssistanceHub />
      {/* <ContactForm
        heading={t('heading', { fallback: 'Our team is one form away!' })}
      /> */}
    </main>
  );
}
