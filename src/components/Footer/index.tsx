import { socialItems } from '@consts/social-items';
import type { JSX } from 'react';
import SocialItemList from '@/components/Footer/_components/SocialItem';

function Footer(): JSX.Element {
  const year = new Date().getFullYear();
  return (
    <footer className="flex justify-between pt-5">
      <div>&#169; {year} Reza Bayuni.</div>
      <ul className="flex gap-2">
        {socialItems.map(({ href, src, alt }): JSX.Element => {
          return <SocialItemList key={href} href={href} src={src} alt={alt} />;
        })}
      </ul>
    </footer>
  );
}

export default Footer;
