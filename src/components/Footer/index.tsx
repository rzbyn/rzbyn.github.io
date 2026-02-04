import SocialItemList from '@components/SocialItem';
import { socialItems } from '@consts/social-items';
import type { JSX } from 'react';

function Footer(): JSX.Element {
  const year = new Date().getFullYear();
  return (
    <footer className="flex justify-between">
      <div>&#169; {year} Reza Bayuni.</div>
      <ul className="flex gap-2">
        {socialItems.map((socialItem, index: number): JSX.Element => {
          return (
            <SocialItemList
              key={index}
              href={socialItem.href}
              src={socialItem.src}
              alt={socialItem.alt}
            />
          );
        })}
      </ul>
    </footer>
  );
}

export default Footer;
