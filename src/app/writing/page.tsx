import { JSX } from "react/jsx-dev-runtime"
import WritingList from "./components/WritingList"

const writingItems: Array<{ id: number | string, title: string, date: Date, fullpath: string }> = []

function Writing(): JSX.Element {
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

