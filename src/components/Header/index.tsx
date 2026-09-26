import Link from 'next/link';
import type { JSX } from 'react';
import Navbar from './_components/Navbar';

function Header(): JSX.Element {
  return (
    <header className="flex flex-col gap-2">
      <div>
        <span className="font-extralight">[logo]</span>{' '}
        <Link href="/" className="font-bold tracking-wide text-2xl">
          Rzbyn
        </Link>
      </div>
      <Navbar />
    </header>
  );
}

export default Header;
