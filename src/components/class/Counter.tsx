import { Component } from 'react'

type CounterProps = {
  message: string
}

type State = {
  count: number
}

export default class Counter extends Component<CounterProps, State> {
  state = {
    count: 0
  }

  updateCount = () => {
    this.setState((prevState) => ({count: prevState.count + 1}))
  }
  deleteCount = () => {
    this.setState((prevState) => ({count: prevState.count - 1}))
  }


  render() {
    return (
      <div>

        <h2>Counter</h2>
        
        <button type='button' onClick={this.updateCount}>
          +
        </button>

        <button type='button' onClick={this.deleteCount}>
          -
        </button>

        {this.props.message} || {this.state.count}

      </div>
    )
  }
}