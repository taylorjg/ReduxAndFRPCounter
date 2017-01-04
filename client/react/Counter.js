import React, { Component, PropTypes } from 'react'

class Counter extends Component {
  render() {
    const { value, onIncrement, onDecrement } = this.props
    return (
      <div>
        <button onClick={onIncrement}>Up</button>
        <button onClick={onDecrement}>Down</button>
        <span>{value}</span>
      </div>
    )
  }
}

Counter.propTypes = {
    value: PropTypes.number.isRequired,
    onIncrement: PropTypes.func.isRequired,
    onDecrement: PropTypes.func.isRequired
}

export default Counter
