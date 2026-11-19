import {
  OPEN_GRAPH_DEFAULTS,
  SITE_NAME,
} from '@shared/consts/site-metadata.const';
import type { Metadata } from 'next';
import type { JSX } from 'react';
import Heading from '@shared/ui/Heading';
import { getPostItems, PostList } from '@features/posts';

const TITLE = 'Writing';
const DESCRIPTION = 'Reza Bayuni writings.';

export const metadata: Metadata = {
  title: TITLE,
  description: DESCRIPTION,
  alternates: { canonical: '/writing/' },
  openGraph: {
    ...OPEN_GRAPH_DEFAULTS,
    title: `${TITLE} | ${SITE_NAME}`,
    description: DESCRIPTION,
    url: '/writing/',
  },
};

export const revalidate = 1;

async function Writing(): Promise<JSX.Element> {
  const posts = await getPostItems('writing', '/writing/');

  return (
    <>
      <Heading className="sr-only">Writing</Heading>
      <PostList posts={posts} emptyMessage="Writing is empty." />
    </>
  );
}

export default Writing;
