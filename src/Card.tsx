import { Component, ReactNode } from "react";

type Props = {
  cardNumber: number
}

class Card extends Component<Props> {
  render(): ReactNode {
      return (
        <>
          <div className="Card">
            {this.props.cardNumber}
          </div>
        </>
      )
  }
}

export default Card
