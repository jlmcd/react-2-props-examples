import React, { Component } from 'react'

export default class Answers extends Component {
  constructor(props) {
    super()
  }
  render() {
    return (
      <div>
        {this.props.answersArr.map(answer => (
          <h4>{answer}</h4>
        ))}
      </div>
    )
  }
}
