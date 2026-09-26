import type { JSX } from 'react';

function Datasintesa(): JSX.Element {
  return (
    <a
      className="text-blue-500 underline"
      href="https://datasintesa.id/"
      target="_blank"
      rel="noopener noreferrer"
    >
      Datasintesa
    </a>
  );
}

export default function Home(): JSX.Element {
  return (
    <>
      <h1>About</h1>
      <section className="flex flex-col gap-4">
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
      </section>
    </>
  );
}
