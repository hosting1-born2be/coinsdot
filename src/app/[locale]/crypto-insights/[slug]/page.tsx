import type { Metadata } from 'next';

import { ArticlesFactory } from './components';
import { metadata } from './meta';

export async function generateMetadata({
  params,
}: {
  params: Promise<{
    slug: string;
  }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const data = metadata[slug];

  return {
    title: data.title,
    description: data.description,
    openGraph: {
      title: data.title,
      description: data.description,
    },
    twitter: {
      title: data.title,
      description: data.description,
    },
  };
}

export default async function CryptoInsightsPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;

  return <ArticlesFactory slug={slug} />;
}
