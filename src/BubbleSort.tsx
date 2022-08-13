import { ReactElement, useEffect, useState } from "react";

import CardsList from "./CardsList";
import CodePanel from './CodePanel'

type TProps = {
  title: string
}

function BubbleSort(props: TProps): ReactElement {
  const [cardsList, setCardsList] = useState([] as number[])
  const [sortedList, setSortedList] = useState([] as number[])
  const [description, setDescription] = useState('')

  useEffect(() => {
    async function fetchData() {
      await fetch('/info/bubble.json')
        .then(res => res.json())
        .then(res => setDescription(res.description))
        .catch(err => console.log(err))
    }

    fetchData()
  }, [])

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
      <div className="Panel">
        <div className="Panel-item">
          <h2>{props.title}</h2>
        </div>
        <div className="Panel-item">
          <h3>Time complexity</h3>
          <p>Worst: <span>O(n^2)</span></p>
          <p>Best: <span>O(n) (list already sorted)</span></p>
        </div>
        <div className="Panel-item">
          <h3>Space complexity</h3>
          <p>
            <span>O(1)</span>
          </p>
        </div>
        <div className="Panel-item">
          <CodePanel description={description} />
        </div>
      </div>
      <hr />
      <CardsList updateCardsList={updateCardsList} sort={sort} sortedList={sortedList} />
    </>
  )
}

export default BubbleSort