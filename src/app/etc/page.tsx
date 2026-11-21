import {
  OPEN_GRAPH_DEFAULTS,
  SITE_NAME,
} from '@shared/consts/site-metadata.const';
import type { Metadata } from 'next';
import type { JSX } from 'react';
import Heading from '@shared/ui/Heading';
import { getPostItems, PostList } from '@features/posts';

const TITLE = 'Etc';
const DESCRIPTION = "Reza Bayuni's etc.";

export const metadata: Metadata = {
  title: TITLE,
  description: DESCRIPTION,
  alternates: { canonical: '/etc/' },
  openGraph: {
    ...OPEN_GRAPH_DEFAULTS,
    title: `${TITLE} | ${SITE_NAME}`,
    description: DESCRIPTION,
    url: '/etc/',
  },
};

export const revalidate = 1;

async function Etc(): Promise<JSX.Element> {
  const posts = await getPostItems('etc', '/etc/');

  return (
    <>
      <Heading className="sr-only">Etc</Heading>
      <PostList posts={posts} emptyMessage="Etc is empty." />
    </>
  );
}

export default Etc;
