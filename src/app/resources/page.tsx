import { Metadata } from 'next';
import { getSortedArticlesData } from '@/lib/articles';
import ResourcesClient from './ResourcesClient';

export const metadata: Metadata = {
  title: 'Engineering Resources | Solagates',
  description: 'Deep technical deep dives, industry trends, and engineering case studies from the minds behind Africa\'s most robust solar infrastructure.',
};

export default async function ResourcesPage() {
  const articles = getSortedArticlesData();

  return <ResourcesClient articles={articles} />;
}
