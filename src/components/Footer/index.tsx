import { socialItems } from '@consts/social-items';
import type { JSX } from 'react';
import SocialItemList from '@/components/Footer/_components/SocialItem';

function Footer(): JSX.Element {
  const year = new Date().getFullYear();
  return (
    <footer className="flex flex-row justify-between">
      <div>&#169; {year} Reza Bayuni.</div>
      <ul className="flex flex-row gap-4">
        {socialItems.map(({ href, src, alt, width, height }): JSX.Element => {
          return (
            <SocialItemList
              key={href}
              href={href}
              src={src}
              alt={alt}
              width={width}
              height={height}
            />
          );
        })}
      </ul>
    </footer>
  );
}

export default Footer;
