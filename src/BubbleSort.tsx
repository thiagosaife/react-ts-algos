import { ReactElement, useState } from "react";

import CardsList from "./CardsList";

type TProps = {
  title: string
}

function BubbleSort(props: TProps): ReactElement {
  const [cardsList, setCardsList] = useState([] as number[])
  const [sortedList, setSortedList] = useState([] as number[])

  function swap(i: number) {
    const t = cardsList[i + 1]
    cardsList[i + 1] = cardsList[i]
    cardsList[i] = t
  }

  function sort() {
    let isSorted = false
    let counter = 0

    while(!isSorted) {
      isSorted = true
      for (let i = 0; i < cardsList.length - counter; i++) {
        if (cardsList[i] > cardsList[i + 1]) {
          swap(i)
          isSorted = false
        }
      }
      counter += 1
    }

    setSortedList(cardsList)
  }

  function updateCardsList(list: number[]) {
    setCardsList(list)
  }

  return (
    <>
      <h2>{props.title}</h2>
      <hr />
      <CardsList updateCardsList={updateCardsList} sort={sort} sortedList={sortedList} />
    </>
  )
}

export default BubbleSort