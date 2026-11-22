import { PasswdFile } from '@features/easter-egg';
import Heading from '@shared/ui/Heading';
import type { Metadata } from 'next';
import type { JSX } from 'react';

// Easter egg: unlinked, and kept out of search results.
export const metadata: Metadata = {
  title: '/etc/passwd',
  robots: { index: false, follow: false },
};

function Passwd(): JSX.Element {
  return (
    <>
      <Heading className="sr-only">/etc/passwd</Heading>
      <PasswdFile />
    </>
  );
}

export default Passwd;
