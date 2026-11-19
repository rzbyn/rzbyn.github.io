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
        <h2 className="text-base font-bold">{title}</h2>
        <span>{date.toLocaleDateString('id-ID')}</span>
      </TextLink>
    </li>
  );
}

export default PostItem;
