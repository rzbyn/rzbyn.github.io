import { socialItems } from '../../consts/social-items.const';
import type { JSX } from 'react';
import SocialItem from '../SocialItem';

function Footer(): JSX.Element {
  const year = new Date().getFullYear();
  return (
    <footer className="mt-16 flex max-w-content items-center justify-between text-sm text-muted md:col-start-2">
      <p>&#169; {year} Reza Bayuni.</p>
      {/* role="list": Safari drops list semantics under list-style:none */}
      <ul role="list" className="flex flex-row gap-3">
        {socialItems.map((item): JSX.Element => (
          <SocialItem key={item.href} {...item} />
        ))}
      </ul>
    </footer>
  );
}

export default Footer;
