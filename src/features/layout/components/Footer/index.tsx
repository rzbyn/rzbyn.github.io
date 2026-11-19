import { socialItems } from '../../consts/social-items.const';
import type { JSX } from 'react';
import SocialItemList from '../SocialItem';

function Footer(): JSX.Element {
  const year = new Date().getFullYear();
  return (
    <footer className="flex flex-row justify-between">
      <p>&#169; {year} Reza Bayuni.</p>
      {/* role="list": Safari drops list semantics under list-style:none */}
      <ul role="list" className="flex flex-row gap-4">
        {socialItems.map((item): JSX.Element => (
          <SocialItemList key={item.href} {...item} />
        ))}
      </ul>
    </footer>
  );
}

export default Footer;
