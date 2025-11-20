import { ArticlesFactory } from './components';

export default async function CryptoInsightsPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;

  return <ArticlesFactory slug={slug} />;
}
