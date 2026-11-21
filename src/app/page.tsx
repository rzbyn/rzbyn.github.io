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
      {/* md: nudge the first line onto the nav baseline */}
      <Prose className="md:-mt-[5px]">
        <p>
          I&apos;m a software engineer living in Jakarta, Indonesia. I&apos;m
          currently the Technical Lead of <Datasintesa />.
        </p>
        <p>
          These days I&apos;m focused on system architecture, performance and
          reliability, mostly building with TypeScript on Node.
        </p>
        <p>
          Husband to a beautiful wife, soon-to-be father. When I&apos;m not
          coding, you can often find me in the kitchen. Lately I&apos;ve been
          into Italian and Chinese cuisine.
        </p>
        <p>
          I&apos;m open to networking, or if you just want to say hi, email me
          at <TextLink href="mailto:hi@rzbyn.com">hi@rzbyn.com</TextLink>.
        </p>
      </Prose>
    </>
  );
}
