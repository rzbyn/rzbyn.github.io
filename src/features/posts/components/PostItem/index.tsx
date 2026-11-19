import Link from 'next/link';
import type { JSX } from 'react';

export interface PostItemProps {
  title: string;
  date: Date;
  fullpath: string;
}

function PostItem({ title, date, fullpath }: PostItemProps): JSX.Element {
  return (
    <li>
      <Link
        href={fullpath}
        className="flex justify-between hover:text-blue-500 hover:underline"
      >
        <h2 className="text-base font-bold">{title}</h2>
        <span>{date.toLocaleDateString('id-ID')}</span>
      </Link>
    </li>
  );
}

export default PostItem;
