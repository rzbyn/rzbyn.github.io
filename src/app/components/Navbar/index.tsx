import Link from "next/link"
import { JSX } from "react"

function Navbar(): JSX.Element {
  return (
    <nav>
      <Link href="/">About</Link> / <Link href="/writing">Wrinting</Link> / <Link href="/misc">Misc</Link>
    </nav>
  )
}

export default Navbar

