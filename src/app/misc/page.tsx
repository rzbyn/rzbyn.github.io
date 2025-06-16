import { JSX } from "react";
import { getMiscellanyList } from "../_lib/notion";
import MiscList from "./_components/MiscList";

export const revalidate = 1

async function Misc(): Promise<JSX.Element> {
  const miscItems = await getMiscellanyList();

  return (
    <>
      <h1>Miscellany</h1>
      <section>
        <MiscList miscItems={miscItems} />
      </section>
    </>
  )
}

export default Misc
