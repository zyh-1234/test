import { Component } from 'react'

export default function widthToolTip(Comp) {
  class HOC extends Component {
    constructor() {
      super()
      this.state = {
        isShow: false,
        content: '',
      }
    }

    handleOut = () => {
      this.setState({
        isShow: false,
        content: '',
      })
    }

    handleOver = (e) => {
      console.log(e.currentTarget)
      this.setState({
        isShow: true,
        content: e.currentTarget.innerText,
      })
    }

    render() {
      return (
        <div
          onMouseOut={this.handleOut}
          onMouseOver={this.handleOver}
          onBlur={() => 0}
          onFocus={() => 0}>
          <Comp actions={this.state} />
        </div>
      )
    }
  }

  return HOC
}
