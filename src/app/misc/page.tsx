import { JSX } from "react";
import MiscList from "./components/MiscList";

const miscItems: Array<{ id: number | string, title: string, date: Date, fullpath: string }> = []

function Misc(): JSX.Element {
  return (
    <section>
      <h1>Miscellany</h1>
      <MiscList miscItems={miscItems} />
    </section>
  );
}

export default Misc

