'use client';

import { articlesSlugs } from '@/features/articles/model/articles';

import { KycArticle } from './kyc-article';
import { MicaArticle } from './mica-article';
import { MythArticle } from './myth-article';
import { UnderstandingArticle } from './understanding-article';

const articles = {
  [articlesSlugs.myth]: <MythArticle />,
  [articlesSlugs.understanding]: <UnderstandingArticle />,
  [articlesSlugs.whyKyc]: <KycArticle />,
  [articlesSlugs.mica]: <MicaArticle />,
};

export const ArticlesFactory = ({ slug }: { slug: string }) => (
  <>{articles[slug] ?? <div>Article not found</div>}</>
);
