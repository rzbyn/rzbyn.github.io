import { RandomMessage } from '@features/not-found';
import Heading from '@shared/ui/Heading';
import TextLink from '@shared/ui/TextLink';
import type { Metadata } from 'next';
import type { JSX } from 'react';

export const metadata: Metadata = {
  title: 'Page Not Found',
};

function NotFound(): JSX.Element {
  return (
    <>
      <Heading>404 Page Not Found</Heading>
      <div className="py-12 text-center">
        <RandomMessage />
        <p>
          What are you looking for? Go to <TextLink href="/">homepage</TextLink>
        </p>
      </div>
    </>
  );
}

export default NotFound;
