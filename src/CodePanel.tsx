import { Component } from "react"

type TProps = {
  description: string
}

class CodePanel extends Component<TProps> {
  render() {
    return(
      <>
        <div className="CodePanel">
          <span>
            { this.props.description }
          </span>
        </div>
      </>
    )
  }
}

export default CodePanel
