import type { JSX } from 'react';
import Navbar from '../Navbar';
import Link from 'next/link';

function Header(): JSX.Element {
  return (
    <>
      <header className="mb-[9px]">
        <span className="font-extralight">[logo]</span>{' '}
        <Link href="/" className="font-bold tracking-wide text-2xl">
          Rzbyn
        </Link>
      </header>
      <Navbar />
    </>
  );
}

export default Header;
