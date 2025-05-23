import { getWritingList } from "../_lib/notion";
import { JSX } from "react";
import WritingList from "./_components/WritingList";

async function Writing(): Promise<JSX.Element> {
  const writingItems = await getWritingList();

  return (
    <>
      <h1>Writing</h1>
      <section>
        <WritingList writingItems={writingItems} />
      </section>
    </>
  )
}

export default Writing
