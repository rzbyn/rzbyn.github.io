import { RandomMessage } from '@features/not-found';
import Heading from '@shared/ui/Heading';
import Prose from '@shared/ui/Prose';
import TextLink from '@shared/ui/TextLink';
import type { Metadata } from 'next';
import type { JSX } from 'react';

export const metadata: Metadata = {
  title: 'Page Not Found',
};

function NotFound(): JSX.Element {
  return (
    <>
      <Heading>Page not found</Heading>
      <Prose className="mt-6">
        <RandomMessage />
        <p>
          What are you looking for? Go to <TextLink href="/">homepage</TextLink>
        </p>
      </Prose>
    </>
  );
}

export default NotFound;
