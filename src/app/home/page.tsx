import Heading from '@shared/ui/Heading';
import Prose from '@shared/ui/Prose';
import TextLink from '@shared/ui/TextLink';
import type { Metadata } from 'next';
import type { JSX } from 'react';

// /home → /. Static export has no server redirects, so this is an instant
// meta refresh (0s, WCAG H76; not a timed redirect), with a link as fallback.
export const metadata: Metadata = {
  title: 'Home',
  alternates: { canonical: '/' },
  robots: { index: false, follow: true },
};

function HomeRedirect(): JSX.Element {
  return (
    <>
      <meta httpEquiv="refresh" content="0; url=/" />
      <Heading className="sr-only">Home</Heading>
      <Prose>
        <p>
          Home is at <TextLink href="/">rzbyn.com</TextLink>.
        </p>
      </Prose>
    </>
  );
}

export default HomeRedirect;
