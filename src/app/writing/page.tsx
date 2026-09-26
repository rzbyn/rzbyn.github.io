import { OPEN_GRAPH_DEFAULTS, SITE_NAME } from '@consts/site-metadata.const';
import type { Metadata } from 'next';
import type { JSX } from 'react';
import WritingList from './_components/WritingList';
import { getWritingItems } from './_lib/get-writing-items';

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
  const writingItems = await getWritingItems();

  return (
    <>
      <h1>Writing</h1>
      <section>
        <WritingList writingItems={writingItems} />
      </section>
    </>
  );
}

export default Writing;
