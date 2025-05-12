import { JSX } from "react";
import MiscItem from "./components/MiscItem";

const miscItems: Array<{ id: number | string, title: string, date: Date, fullpath: string }> = [
  {
    id: 1,
    title: "First Misc Ever",
    date: new Date(),
    fullpath: "/miscs/1"
  }
]

function Misc(): JSX.Element {
  return (
    <section>
      <h1>Miscellany</h1>
      {
        miscItems.length
          ? <ol>
            {
              miscItems.map(({ id, title, date, fullpath }): JSX.Element => {
                return (<MiscItem key={id} title={title} date={date} fullpath={fullpath} />)
              })
            }
          </ol>
          : <p>Miscellany is empty.</p>
      }
    </section>
  );
}

export default Misc

