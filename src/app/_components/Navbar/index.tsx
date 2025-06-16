import { JSX } from "react"
import NavItem from "./_components/NavItem";
import { navItems } from "./_lib/consts/nav-items";

function Navbar(): JSX.Element {
  return (
    <nav className="mb-7">
      <ul className="flex gap-2">
        {
          navItems.map((navItem: { text: string, fullpath: string, path: string }, index: number): JSX.Element => {
            return (
              <NavItem key={index} id={index} text={navItem.text} fullpath={navItem.fullpath} path={navItem.path} />
            )
          })
        }
      </ul>
    </nav>
  )
}

export default Navbar

