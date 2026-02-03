import type { JSX } from 'react';
import WritingList from './_components/WritingList';
import { getWritingItems } from './_lib/get-writing-items';

export const revalidate = 1;

async function Writing(): Promise<JSX.Element> {
  const writingItems = await getWritingItems();

  return (
    <>
      <h1>Writing</h1>
      <section>
        <WritingList writingItems={writingItems} />
      </section>
    </>
  );
}

export default Writing;
