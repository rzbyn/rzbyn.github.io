import { JSX } from "react"
import { usePathname } from "next/navigation"
import Link from "next/link"

interface NavItemProps {
  id: number | string,
  text: string,
  fullpath: string,
  path: string,
}

function NavItem({ id, text, fullpath, path }: NavItemProps): JSX.Element {
  const pathName = usePathname().split('/')[1].toLowerCase();
  const isActive = (name: string): boolean => {
    return pathName === name;
  }
  return (
    <li>
      {id === 0 || id === null ? "" : <span aria-hidden>/ </span>}
      <Link href={fullpath} className={`${isActive(path) ? 'text-blue-500 underline' : ''}`}>{text}</Link>
    </li>
  )
}

export default NavItem;
