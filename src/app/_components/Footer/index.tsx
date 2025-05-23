import { JSX } from "react";
import SocialItem from "./_components/SocialItem";
import { socialItems } from "./_lib/consts/social-items";

function Footer(): JSX.Element {
  return (
    <footer className="flex justify-between">
      <div>
        &#169; 2025 Reza Bayuni.
      </div>
      <ul className="flex gap-2">
        {
          socialItems.map((socialItem, index: number): JSX.Element => {
            return (
              <SocialItem key={index} href={socialItem.href} src={socialItem.src} alt={socialItem.alt} />
            )
          })
        }
      </ul>
    </footer>
  )
}

export default Footer;

