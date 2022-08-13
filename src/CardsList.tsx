import { ReactElement, useEffect, useState } from "react";

import Card from "./Card";

type TProps = {
  sort: Function
  sortedList: number[]
  updateCardsList: Function
}

type TState = {
  length: number
  random: number
}

function CardsList(props: TProps): ReactElement {
  const [cardsList, setCardsList] = useState([] as number[])
  const [listProps, setListProps] = useState({
    length: 100,
    random: 100
  } as TState)

  function randomNumbers(): number[] {
    return Array.from({length: listProps.length}, () => Math.floor(Math.random() * listProps.random))
  }

  useEffect(() => {
    setCardsList(props.sortedList)
  }, [props.sortedList])

  useEffect(() => {
    setCardsList(randomNumbers)
  }, [listProps])

  useEffect(() => {
    props.updateCardsList(cardsList)
  }, [cardsList])
  
  return (
    <>
      <div className="Card-controls">
        <label>Max numbers:</label>
        <input
          name="random"
          type="number"
          value={listProps.random}
          onChange={(evt) => setListProps((prevState) => ({
            ...prevState,
            random: +evt.target.value
          }))} 
        />
        <label>Array length:</label>
        <input
          name="length"
          type="number"
          value={listProps.length}
          onChange={(evt) => setListProps((prevState) => ({
            ...prevState,
            length: +evt.target.value
          }))}
        />
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
          Unsort
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