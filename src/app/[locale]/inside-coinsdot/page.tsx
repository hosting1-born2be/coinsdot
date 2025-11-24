import type { Metadata } from 'next';

import { ExchangeWithExperts, Hero, WhoWeAre } from './components';

export const metadata: Metadata = {
  title: 'Inside Coinsdot | Coinsdot',
  description:
    'Explore how Coinsdot enables the exchange of Bitcoin and Ethereum for fiat and vice versa. Learn about our vision, values, and the technology that supports direct, wallet-to-wallet transactions.',
  openGraph: {
    title: 'Inside Coinsdot | Coinsdot',
    description:
      'Explore how Coinsdot enables the exchange of Bitcoin and Ethereum for fiat and vice versa. Learn about our vision, values, and the technology that supports direct, wallet-to-wallet transactions.',
  },
  twitter: {
    title: 'Inside Coinsdot | Coinsdot',
    description:
      'Explore how Coinsdot enables the exchange of Bitcoin and Ethereum for fiat and vice versa. Learn about our vision, values, and the technology that supports direct, wallet-to-wallet transactions.',
  },
};

export default function InsideCoinsdotPage() {
  return (
    <main>
      <Hero />
      <WhoWeAre />
      <ExchangeWithExperts />
    </main>
  );
}
