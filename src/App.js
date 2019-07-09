import React, { Component } from 'react'
import './App.css'
import MathButton from './components/MathButton'
import Answers from './components/Answers'

class App extends Component {
  constructor() {
    super()
    this.state = {
      number1: null,
      number2: null,
      answer: []
    }
    this.add = this.add.bind(this)
    this.multiply = this.multiply.bind(this)
  }
  handleNum1(e) {
    this.setState({
      number1: e.target.value
    })
  }
  handleNum2(e) {
    this.setState({
      number2: e.target.value
    })
  }
  add() {
    const { number1, number2 } = this.state
    this.setState({
      answer: [
        ...this.state.answer,
        `${number1} + ${number2} = ${+number1 + +number2}`
      ]
    })
  }
  multiply() {
    const { number1, number2 } = this.state
    this.setState({
      answer: [
        ...this.state.answer,
        `${number1} x ${number2} = ${number1 * number2}`
      ]
    })
  }
  subtract = () => {
    const { number1, number2 } = this.state
    this.setState({
      answer: [
        ...this.state.answer,
        `${number1} - ${number2} = ${number1 - number2}`
      ]
    })
  }
  divide = () => {
    const { number1, number2 } = this.state
    this.setState({
      answer: [
        ...this.state.answer,
        `${number1} ÷ ${number2} = ${number1 / number2}`
      ]
    })
  }
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1>Math Master</h1>
          <div className="maths">
            <input
              tabIndex="1"
              onChange={e => this.handleNum1(e)}
              type="number"
            />
            <div className="math-buttons">
              <MathButton operator="+" mathFn={this.add} />
              <MathButton operator="-" mathFn={this.subtract} />
              <MathButton operator="x" mathFn={this.multiply} />
              <MathButton operator="÷" mathFn={this.divide} />
            </div>
            <input
              tabIndex="2"
              onChange={e => this.handleNum2(e)}
              type="number"
            />
          </div>
          <Answers answersArr={this.state.answer} />
        </header>
      </div>
    )
  }
}

export default App
