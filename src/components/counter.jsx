import React, { Component } from 'react';

class Counter extends Component {
  render() {
    const { counter, onDecrement, onIncrement, onDelete } = this.props;

    return (
      <div className="counter p-3 d-flex align-items-center">
        <button
          className="decrement btn btn-md btn-warning"
          onClick={() => onDecrement(counter)}
          disabled={counter.value < 1 ? true : false}
        >
          -
        </button>
        <h1 className="m-2 d-inline">
          <span className={this.getBadgeClasses()}>{counter.value}</span>
        </h1>
        <button className="increment btn btn-md btn-primary" onClick={() => onIncrement(counter)}>
          +
        </button>
        <button className="btn btn-danger btn-md m-2" onClick={() => onDelete(counter.id)}>
          x
        </button>
      </div>
    );
  }

  // formatCount() {
  //   const { value } = this.props.counter;
  //   return value === 0 ? 'Zero' : value;
  // }

  getBadgeClasses() {
    let classes = 'badge m-1 ';
    classes += this.props.counter.value === 0 ? 'badge-warning' : 'badge-primary';
    return classes;
  }
}

export default Counter;
