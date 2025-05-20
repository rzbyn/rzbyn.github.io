import { JSX } from "react";

export default function Home(): JSX.Element {
  return (
    <section>
      <h1>About</h1>
      <div className="flex flex-col gap-2">
        <p>
          I'm a developer hailing from Indonesia. I lead Backend Engineering team at <a href="https://datasintesa.id/" target="_blank" rel="noopener noreferrer" className="text-blue-500 underline">Datasintesa</a>.
        </p>
        <p>
          I try to share or write things I found interesting to me or something I do.
        </p>
        <p>
          When I'm not coding, you can often finde me in the kitchen 🍳.
        </p>
      </div>
    </section>
  );
}
