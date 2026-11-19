import Link from 'next/link';
import type { JSX } from 'react';

function Header(): JSX.Element {
  return (
    <header className="col-span-full flex items-center gap-3 md:grid md:grid-cols-subgrid md:mb-20">
      <div>
        <span aria-hidden className="font-extralight">
          [logo]
        </span>{' '}
        <Link href="/" className="font-bold tracking-wide text-2xl">
          Reza Bayuni
        </Link>
      </div>
    </header>
  );
}

export default Header;
