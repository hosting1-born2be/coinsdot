import type { Metadata } from 'next';

import { Articles, Banner, Hero } from './components';

export const metadata: Metadata = {
  title: 'Crypto Insights | Coinsdot',
  description:
    'Explore the latest articles on cryptocurrency, blockchain, and everyday usage of crypto. Learn, discover, and stay informed with Coinsdot.',
  openGraph: {
    title: 'Crypto Insights | Coinsdot',
    description:
      'Explore the latest articles on cryptocurrency, blockchain, and everyday usage of crypto. Learn, discover, and stay informed with Coinsdot.',
    images: ['https://coinsdot.io/meta.jpg'],
  },
  twitter: {
    title: 'Crypto Insights | Coinsdot',
    description:
      'Explore the latest articles on cryptocurrency, blockchain, and everyday usage of crypto. Learn, discover, and stay informed with Coinsdot.',
    images: ['https://coinsdot.io/meta.jpg'],
  },
};

export default function CryptoInsightsPage() {
  return (
    <main>
      <Hero />
      <Banner />
      <Articles />
    </main>
  );
}
