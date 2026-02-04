import SocialItemList from '@components/SocialItem';
import type { JSX } from 'react';
import { socialItems } from '../../consts/social-items';

function Footer(): JSX.Element {
  return (
    <footer className="flex justify-between">
      <div>&#169; 2025 Reza Bayuni.</div>
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
