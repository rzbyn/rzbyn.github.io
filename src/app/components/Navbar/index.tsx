'use client';

import Link from "next/link"
import { usePathname } from "next/navigation"
import { JSX } from "react"

function Navbar(): JSX.Element {
  const pathName = usePathname().split('/')[1].toLowerCase();
  const isActive = (name: string) => {
    return pathName === name;
  }
  const menus = [
    {
      text: "About",
      fullpath: "/",
      path: "",
    },
    {
      text: "Writing",
      fullpath: "/writing",
      path: "writing",
    },
    {
      text: "Misc",
      fullpath: "/misc",
      path: "misc",
    },
  ];
  return (
    <nav className="mb-7">
      <ul className="flex gap-2">
        {
          menus.map((menu, index) => {
            return (
              <li key={index}>
                {index === 0 ? "" : <span aria-hidden>/ </span>}
                <Link href={menu.fullpath} className={`${isActive(menu.path) ? 'text-blue-500 underline' : ''}`}>{menu.text}</Link>
              </li>
            )
          })
        }
      </ul>
    </nav>
  )
}

export default Navbar

