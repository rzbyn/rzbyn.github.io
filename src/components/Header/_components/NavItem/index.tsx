'use client';

import { type NavItem } from '@consts/nav-items';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import type { JSX } from 'react';

interface NavItemProps extends NavItem {
  /** JSX key prop */
  index: number;
}

function NavItemList({
  index,
  text,
  fullpath,
  path,
}: NavItemProps): JSX.Element {
  const pathName = usePathname().split('/')[1].toLowerCase();
  const isActive = (name: string): boolean => {
    return pathName === name;
  };
  return (
    <li>
      {index === 0 || index === null ? '' : <span aria-hidden>/ </span>}
      <Link
        href={fullpath}
        className={`${isActive(path) ? 'text-blue-500 underline' : ''}`}
      >
        {text}
      </Link>
    </li>
  );
}

export default NavItemList;
