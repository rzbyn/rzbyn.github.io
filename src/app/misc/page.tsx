import { JSX } from "react"
import MiscList from "./_components/MiscList"
import { getMiscellanyItems } from "./_lib/get-miscellany-items"

export const revalidate = 1

async function Misc(): Promise<JSX.Element> {
  const miscItems = await getMiscellanyItems()

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
