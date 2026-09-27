import Image from 'next/image';
import type { JSX } from 'react';
import type { SocialItem } from '@/consts/social-items';

interface SocialItemProps extends SocialItem {}

function SocialItemList({
  href,
  src,
  alt,
  width,
  height,
}: SocialItemProps): JSX.Element {
  return (
    <li>
      <a
        href={href}
        target="_blank"
        rel="noopener"
        referrerPolicy="strict-origin-when-cross-origin"
      >
        <Image
          src={src}
          alt={alt}
          width={width}
          height={height}
          loading="eager"
          style={{
            width: '24px',
            height: '24px',
            objectFit: 'contain',
          }}
        />
      </a>
    </li>
  );
}

export default SocialItemList;
