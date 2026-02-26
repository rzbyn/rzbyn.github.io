import type { SocialItem } from '@/consts/social-items';
import Image from 'next/image';
import type { JSX } from 'react';

interface SocialItemProps extends SocialItem {
  /** JSX key prop */
  key: number | string;
}

function SocialItemList({ key, href, src, alt }: SocialItemProps): JSX.Element {
  return (
    <li key={key}>
      <a href={href} target="_blank" rel="noopener noreferrer">
        <Image src={src} alt={alt} width={20} height={20} />
      </a>
    </li>
  );
}

export default SocialItemList;
