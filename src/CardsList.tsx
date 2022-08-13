import { ReactElement, useEffect, useState } from "react";

import Card from "./Card";

type TProps = {
  sort: Function
  sortedList: number[]
  updateCardsList: Function
}

function CardsList(props: TProps): ReactElement {
  const [cardsList, setCardsList] = useState([] as number[])

  function randomNumbers() {
    return Array.from({length: 10}, () => Math.floor(Math.random() * 100))
  }

  useEffect(() => {
    setCardsList(props.sortedList)
  }, [props.sortedList])

  useEffect(() => {
    setCardsList(randomNumbers)
  }, [])

  useEffect(() => {
    props.updateCardsList(cardsList)
  }, [cardsList])
  
  return (
    <>
      <div className="Card-controls">
        <button
          onClick={() => props.sort()}
          className="Card-button"
        >
          Sort
        </button>
        <button
          onClick={() => setCardsList(randomNumbers)}
          className="Card-button"
        >
          Randomize
        </button>
      </div>
      <div className="CardsList">
        {
          cardsList.map((c, i) => <Card key={i} cardNumber={c} />)
        }
      </div>
    </>
  )
}

export default CardsList