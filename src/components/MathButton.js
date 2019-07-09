import React, {Component} from 'react'

export default class MathButton extends Component {
  // eslint-disable-next-line
  constructor(props) {
    super(props)
  }
  render() {
    return (
      <button onClick={() => this.props.mathFn()}>{this.props.operator}</button>
    )
  }
}