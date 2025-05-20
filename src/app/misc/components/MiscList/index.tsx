import { JSX } from "react";
import MiscItem, { MiscItemProps } from "../MiscItem";

interface MiscListProps {
  miscItems: Array<{ id: string | number } & MiscItemProps>
}

function MiscList({ miscItems }: MiscListProps): JSX.Element {
  return (
    <>
      {
        miscItems.length
          ? <ol>
            {
              miscItems.map((miscItem): JSX.Element => {
                return (<MiscItem key={miscItem.id} title={miscItem.title} date={miscItem.date} fullpath={miscItem.fullpath} />)
              })
            }
          </ol>
          : <p>Misc is empty.</p>
      }
    </>
  )
}

export default MiscList
