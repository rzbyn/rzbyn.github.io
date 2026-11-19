import {
  OPEN_GRAPH_DEFAULTS,
  SITE_NAME,
} from '@shared/consts/site-metadata.const';
import type { Metadata } from 'next';
import type { JSX } from 'react';
import Heading from '@shared/ui/Heading';
import { getPostItems, PostList } from '@features/posts';

const TITLE = 'Miscellany';
const DESCRIPTION = 'Reza Bayuni miscellaneous.';

export const metadata: Metadata = {
  title: TITLE,
  description: DESCRIPTION,
  alternates: { canonical: '/misc/' },
  openGraph: {
    ...OPEN_GRAPH_DEFAULTS,
    title: `${TITLE} | ${SITE_NAME}`,
    description: DESCRIPTION,
    url: '/misc/',
  },
};

export const revalidate = 1;

async function Misc(): Promise<JSX.Element> {
  const posts = await getPostItems('miscellany', '/misc/');

  return (
    <>
      <Heading>Miscellany</Heading>
      <section>
        <PostList posts={posts} emptyMessage="Misc is empty." />
      </section>
    </>
  );
}

export default Misc;
