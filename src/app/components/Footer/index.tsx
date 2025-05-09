import Image from "next/image";
import { JSX } from "react";

function Footer(): JSX.Element {
  const iconsPath = "/assets/icons/"
  const socials = [
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
  return (
    <footer className="flex justify-between">
      <div>
        &#169; 2025 Reza Bayuni.
      </div>
      <ul className="flex gap-2">
        {
          socials.map((social, index) => {
            return (
              <li key={index}>
                <a href={social.href} target="_blank" rel="noopener noreferrer">
                  <Image
                    src={social.src}
                    alt={social.alt}
                    width={20}
                    height={20}
                  />
                </a>
              </li>
            )
          })
        }
      </ul>
    </footer>
  )
}

export default Footer;

