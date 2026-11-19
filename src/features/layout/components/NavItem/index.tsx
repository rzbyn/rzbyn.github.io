'use client';

import TextLink from '@shared/ui/TextLink';
import { usePathname } from 'next/navigation';
import type { JSX } from 'react';
import { type NavItem } from '../../consts/nav-items.const';

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
      <TextLink
        href={fullpath}
        tone={isActive(path) ? 'accent' : 'inherit'}
        underline={isActive(path) ? 'always' : 'none'}
        aria-current={isActive(path) ? 'page' : undefined}
      >
        {text}
      </TextLink>
    </li>
  );
}

export default NavItemList;
