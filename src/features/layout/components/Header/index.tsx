import Link from 'next/link';
import type { JSX } from 'react';
import Mark from '../Mark';

function Header(): JSX.Element {
  return (
    <header className="col-span-full flex items-center gap-3 md:mb-20 md:grid md:grid-cols-subgrid md:gap-0">
      {/* Mouse shortcut only: the wordmark is the accessible home link */}
      <Link href="/" aria-hidden tabIndex={-1} className="w-fit">
        <Mark className="size-7 text-accent md:size-8" />
      </Link>
      <Link
        href="/"
        className="w-fit stretch-wide text-[17px] font-extrabold tracking-[0.06em] uppercase"
      >
        Reza Bayuni
      </Link>
    </header>
  );
}

export default Header;
