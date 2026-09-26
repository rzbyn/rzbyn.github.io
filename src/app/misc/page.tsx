import { OPEN_GRAPH_DEFAULTS, SITE_NAME } from '@consts/site-metadata.const';
import type { Metadata } from 'next';
import type { JSX } from 'react';
import MiscList from './_components/MiscList';
import { getMiscellanyItems } from './_lib/get-miscellany-items';

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
  const miscItems = await getMiscellanyItems();

  return (
    <>
      <h1>Miscellany</h1>
      <section>
        <MiscList miscItems={miscItems} />
      </section>
    </>
  );
}

export default Misc;
