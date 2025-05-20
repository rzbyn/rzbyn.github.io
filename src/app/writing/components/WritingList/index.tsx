import { JSX } from "react"
import WritingItem, { WritingItemProps } from "../WritingItem/index"

interface WritingListProps {
  writingItems: Array<{ id: string | number } & WritingItemProps>
}

function WritingList({ writingItems }: WritingListProps): JSX.Element {
  return (
    <>
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
    </>
  )
}

export default WritingList

