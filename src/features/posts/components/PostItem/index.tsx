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
        className="flex justify-between gap-4"
      >
        <Heading as="h2" variant="item">
          {title}
        </Heading>
        <time dateTime={date.toISOString().slice(0, 10)} className="shrink-0">
          {date.toLocaleDateString('id-ID', { timeZone: 'UTC' })}
        </time>
      </TextLink>
    </li>
  );
}

export default PostItem;
