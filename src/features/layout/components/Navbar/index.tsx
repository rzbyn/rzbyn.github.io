import type { JSX } from 'react';
import { navItems } from '../../consts/nav-items.const';
import NavItemList from '../NavItem';

function Navbar(): JSX.Element {
  return (
    <nav className="md:col-start-1 md:row-start-2 md:row-span-2">
      <ul className="flex flex-row gap-4 md:flex-col md:gap-1 lg:sticky lg:top-20">
        {navItems.map(({ text, fullpath, path }): JSX.Element => (
          <NavItemList key={path} text={text} fullpath={fullpath} path={path} />
        ))}
      </ul>
    </nav>
  );
}

export default Navbar;
