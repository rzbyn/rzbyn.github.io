import { navItems } from '@/consts/nav-items';
import type { JSX } from 'react';
import NavItemList from '../NavItem';

function Navbar(): JSX.Element {
  return (
    <nav className="mb-7">
      <ul className="flex gap-2">
        {navItems.map(({ text, fullpath, path }, index): JSX.Element => {
          return (
            <NavItemList
              key={path}
              index={index}
              text={text}
              fullpath={fullpath}
              path={path}
            />
          );
        })}
      </ul>
    </nav>
  );
}

export default Navbar;
