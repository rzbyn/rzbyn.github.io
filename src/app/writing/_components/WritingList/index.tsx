import type { JSX } from 'react';
import WritingItem, { type WritingItemProps } from '../WritingItem/index';

interface WritingListProps {
  writingItems: Array<{ id: string | number } & WritingItemProps>;
}

function WritingList({ writingItems }: WritingListProps): JSX.Element {
  if (
    !writingItems ||
    writingItems.length === 0 ||
    !Array.isArray(writingItems)
  )
    return <p>Writing is empty.</p>;

  return (
    <ol>
      {writingItems.map((writingItem): JSX.Element => {
        return (
          <WritingItem
            key={writingItem.id}
            title={writingItem.title}
            date={writingItem.date}
            fullpath={writingItem.fullpath}
          />
        );
      })}
    </ol>
  );
}

export default WritingList;
