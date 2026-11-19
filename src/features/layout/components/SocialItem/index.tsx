import TextLink from '@shared/ui/TextLink';
import type { JSX } from 'react';
import type { SocialItem } from '../../consts/social-items.const';

interface SocialItemProps extends SocialItem {}

function SocialItemList({
  href,
  label,
  external,
  Icon,
}: SocialItemProps): JSX.Element {
  return (
    <li>
      <TextLink
        href={href}
        external={external}
        tone="muted"
        underline="none"
        className="inline-flex"
      >
        <Icon className="size-[18px]" />
        <span className="sr-only">{label}</span>
      </TextLink>
    </li>
  );
}

export default SocialItemList;
