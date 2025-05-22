import { JSX } from "react";

export default function Home(): JSX.Element {
  return (
    <section>
      <h1>About</h1>
      <div className="flex flex-col gap-2">
        <p>
          I&apos;m a developer hailing from Indonesia. I lead Backend Engineering team at <a href="https://datasintesa.id/" target="_blank" rel="noopener noreferrer" className="text-blue-500 underline">Datasintesa</a>.
        </p>
        <p>
          I try to write things I do to or something I found interesting.
        </p>
        <p>
          When I&apos;m not coding, you can often finde me in the kitchen 🍳.
        </p>
      </div>
    </section>
  );
}
