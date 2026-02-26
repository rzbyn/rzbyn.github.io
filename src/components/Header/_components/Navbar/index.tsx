import { navItems } from '@/consts/nav-items';
import type { JSX } from 'react';
import NavItemList from '../NavItem';

function Navbar(): JSX.Element {
  return (
    <nav className="mb-7">
      <ul className="flex gap-2">
        {navItems.map((navItem, index: number): JSX.Element => {
          return (
            <NavItemList
              key={index}
              text={navItem.text}
              fullpath={navItem.fullpath}
              path={navItem.path}
            />
          );
        })}
      </ul>
    </nav>
  );
}

export default Navbar;
