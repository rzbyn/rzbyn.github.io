import Heading from '@shared/ui/Heading';
import TextLink from '@shared/ui/TextLink';
import type { JSX } from 'react';

export interface PostItemProps {
  title: string;
  date: Date;
  fullpath: string;
}

function PostItem({ title, date, fullpath }: PostItemProps): JSX.Element {
  return (
    <li>
      <TextLink
        href={fullpath}
        tone="hover-accent"
        underline="hover"
        className="flex justify-between"
      >
        <Heading as="h2" variant="item">
          {title}
        </Heading>
        <span>{date.toLocaleDateString('id-ID')}</span>
      </TextLink>
    </li>
  );
}

export default PostItem;
