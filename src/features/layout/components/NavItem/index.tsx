'use client';

import { cn } from '@shared/lib/cn';
import TextLink from '@shared/ui/TextLink';
import { usePathname } from 'next/navigation';
import type { JSX } from 'react';
import type { NavItem as NavItemData } from '../../consts/nav-items.const';

function NavItem({ text, fullpath, path }: NavItemData): JSX.Element {
  const isActive = usePathname().split('/')[1].toLowerCase() === path;
  return (
    // md: the dot hangs left (5px dot + 8px gap) so the text lines up with the mark
    <li className="flex flex-col-reverse items-center gap-1 md:-ml-[13px] md:flex-row md:gap-2">
      <span
        aria-hidden
        className={cn(
          'size-[5px] shrink-0 rounded-full bg-accent transition-[scale,opacity] duration-200 ease-out-strong motion-reduce:transition-opacity',
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
