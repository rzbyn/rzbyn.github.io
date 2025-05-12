import { JSX } from "react";
import SocialItem from "./components/SocialItem";

const iconsPath = "/assets/icons/"
const socialItems = [
  {
    href: "mailto:hi@rzbyn.com",
    src: iconsPath + "email.svg",
    alt: "email logo",
  },
  {
    href: "https://www.github.com/rzbyn",
    src: iconsPath + "github.svg",
    alt: "github logo",
  },
  {
    href: "https://www.linkedin.com/in/rezabayuni",
    src: iconsPath + "linkedin.svg",
    alt: "linkedin logo",
  },
];

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

