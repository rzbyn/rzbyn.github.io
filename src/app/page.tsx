import {
  OPEN_GRAPH_DEFAULTS,
  SITE_DESCRIPTION,
  SITE_NAME,
} from '@shared/consts/site-metadata.const';
import type { Metadata } from 'next';
import type { JSX } from 'react';
import Heading from '@shared/ui/Heading';
import Prose from '@shared/ui/Prose';
import TextLink from '@shared/ui/TextLink';

export const metadata: Metadata = {
  alternates: { canonical: '/' },
  openGraph: {
    ...OPEN_GRAPH_DEFAULTS,
    title: SITE_NAME,
    description: SITE_DESCRIPTION,
    url: '/',
  },
};

function Datasintesa(): JSX.Element {
  return (
    <TextLink href="https://datasintesa.id/" external>
      Datasintesa
    </TextLink>
  );
}

export default function Home(): JSX.Element {
  return (
    <>
      <Heading className="sr-only">About</Heading>
      <Prose>
        <p>
          I&apos;m a software engineer living in Jakarta, Indonesia. I&apos;m
          currently the Technical Lead of <Datasintesa />.
        </p>
        <p>
          Working around architecture and technological stacks across projects.
        </p>
        <p>
          Husband to a beautiful wife, and soon-to-be father. When I&apos;m not
          coding, you can often find me in the kitchen 🍳 — lately I&apos;ve
          been into Italian and Chinese cuisine.
        </p>
      </Prose>
    </>
  );
}
