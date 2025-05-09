import { JSX } from "react";
import Navbar from "../Navbar";
import Link from "next/link";

function Header(): JSX.Element {
  return (
    <>
      <header className="mb-[9px]">
        <span>logo</span> <Link href="/">Rzbyn</Link>
      </header>
      <Navbar />
    </>
  );
}

export default Header

