import {
  OPEN_GRAPH_DEFAULTS,
  SITE_NAME,
} from '@shared/consts/site-metadata.const';
import type { Metadata } from 'next';
import type { JSX } from 'react';
import Heading from '@shared/ui/Heading';
import { getPostItems, PostList } from '@features/posts';

const TITLE = 'Log';
const DESCRIPTION = "Reza Bayuni's log.";

export const metadata: Metadata = {
  title: TITLE,
  description: DESCRIPTION,
  alternates: { canonical: '/log/' },
  openGraph: {
    ...OPEN_GRAPH_DEFAULTS,
    title: `${TITLE} | ${SITE_NAME}`,
    description: DESCRIPTION,
    url: '/log/',
  },
};

export const revalidate = 1;

async function Log(): Promise<JSX.Element> {
  const posts = await getPostItems('log', '/log/');

  return (
    <>
      <Heading className="sr-only">Log</Heading>
      <PostList posts={posts} emptyMessage="Log is empty." />
    </>
  );
}

export default Log;
