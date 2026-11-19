import Heading from '@shared/ui/Heading';
import TextLink from '@shared/ui/TextLink';
import type { JSX } from 'react';
import { formatPostDate } from '../../lib/format-post-date';

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
        tone="inherit"
        underline="none"
        className="group flex flex-col gap-1 py-3 md:flex-row md:items-baseline md:justify-between md:gap-6"
      >
        <Heading
          as="h2"
          className="transition-colors duration-150 ease-[ease] group-hover:text-accent"
        >
          {title}
        </Heading>
        <time
          dateTime={date.toISOString().slice(0, 10)}
          className="shrink-0 text-sm text-muted tabular-nums md:w-28 md:text-right"
        >
          {formatPostDate(date)}
        </time>
      </TextLink>
    </li>
  );
}

export default PostItem;
