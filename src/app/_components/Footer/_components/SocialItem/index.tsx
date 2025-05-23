import { JSX } from "react"
import Image from "next/image"

interface SocialItemProps {
  href: string,
  src: string,
  alt: string,
}

function SocialItem({ href, src, alt }: SocialItemProps): JSX.Element {
  return (
    <li>
      <a href={href} target="_blank" rel="noopener noreferrer">
        <Image
          src={src}
          alt={alt}
          width={20}
          height={20}
        />
      </a>
    </li>
  )
}

export default SocialItem
