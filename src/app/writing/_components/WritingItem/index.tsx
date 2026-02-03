import type { JSX } from 'react';
import Link from 'next/link';

export interface WritingItemProps {
  title: string;
  date: Date;
  fullpath: string;
}

function WritingItem({ title, date, fullpath }: WritingItemProps): JSX.Element {
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

export default WritingItem;
