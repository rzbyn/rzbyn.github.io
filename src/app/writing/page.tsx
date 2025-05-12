import { JSX } from "react/jsx-dev-runtime";
import WritingItem from "./components/WritingItem";

const writingItems: Array<{ id: number | string, title: string, date: Date, fullpath: string }> = [
  {
    id: 1,
    title: "First Writing Ever",
    date: new Date(),
    fullpath: '/writings/1',
  }
]

function Writing(): JSX.Element {
  return (
    <section>
      <h1>Writing</h1>
      {
        writingItems.length
          ? <ol>
            {
              writingItems.map((writingItem): JSX.Element => {
                return (<WritingItem key={writingItem.id} title={writingItem.title} date={writingItem.date} fullpath={writingItem.fullpath} />)
              })
            }
          </ol>
          : <p>Writing is empty.</p>
      }
    </section>
  )
}

export default Writing

