import { JSX } from "react";
import MiscItem, { MiscItemProps } from "../MiscItem";

interface MiscListProps {
  miscItems: Array<{ id: string | number } & MiscItemProps>
}

function MiscList({ miscItems }: MiscListProps): JSX.Element {
  if (!miscItems || miscItems.length === 0 || !Array.isArray(miscItems))
    return (<p>Misc is empty.</p>)

  return (
    <ol>
      {
        miscItems.map((miscItem): JSX.Element => {
          return (<MiscItem key={miscItem.id} title={miscItem.title} date={miscItem.date} fullpath={miscItem.fullpath} />)
        })
      }
    </ol>
  )
}

export default MiscList
