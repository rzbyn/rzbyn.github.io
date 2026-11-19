import TextLink from '@shared/ui/TextLink';
import Image from 'next/image';
import type { JSX } from 'react';
import type { SocialItem } from '../../consts/social-items.const';

interface SocialItemProps extends SocialItem {}

function SocialItemList({
  href,
  src,
  alt,
  width,
  height,
  external,
}: SocialItemProps): JSX.Element {
  return (
    <li>
      <TextLink href={href} external={external} tone="inherit" underline="none">
        <Image
          src={src}
          alt={alt}
          width={width}
          height={height}
          loading="eager"
          className="dark:invert"
          style={{
            width: '24px',
            height: '24px',
            objectFit: 'contain',
          }}
        />
      </TextLink>
    </li>
  );
}

export default SocialItemList;
