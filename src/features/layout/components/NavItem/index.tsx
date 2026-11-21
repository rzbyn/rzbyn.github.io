'use client';

import { cn } from '@shared/lib/cn';
import Signature from '@shared/ui/Signature';
import TextLink from '@shared/ui/TextLink';
import { usePathname } from 'next/navigation';
import type { JSX } from 'react';
import type { NavItem as NavItemData } from '../../consts/nav-items.const';

function NavItem({ text, fullpath, path }: NavItemData): JSX.Element {
  const isActive = usePathname().split('/')[1].toLowerCase() === path;
  return (
    // md: the motif hangs left (7px motif + 8px gap) so the text lines up with the mark
    <li className="flex flex-col-reverse items-center gap-1 md:-ml-[15px] md:flex-row md:gap-2">
      <Signature
        className={cn(
          'size-[7px] shrink-0 text-signature transition-[scale,opacity] duration-200 ease-out-strong motion-reduce:transition-opacity',
          isActive
            ? 'scale-100 opacity-100'
            : 'scale-50 opacity-0 motion-reduce:scale-100',
        )}
      />
      <TextLink
        href={fullpath}
        tone={isActive ? 'accent' : 'muted'}
        underline="none"
        className="text-[15px]"
        aria-current={isActive ? 'page' : undefined}
      >
        {text}
      </TextLink>
    </li>
  );
}

export default NavItem;
