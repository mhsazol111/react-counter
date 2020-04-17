import React, { Component } from 'react';
import Counter from './counter';

class Couners extends Component {
  render() {
    const { counters, onIncrement, onDecrement, onDelete, onReset } = this.props;

    return (
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-lg-6">
            <div className="counters">
              {counters.map((counter) => (
                <Counter
                  key={counter.id}
                  counter={counter}
                  onIncrement={onIncrement}
                  onDecrement={onDecrement}
                  onDelete={onDelete}
                />
              ))}
            </div>
            <button className="btn btn-lg btn-info m-3" onClick={onReset}>
              Reset Counters
            </button>
          </div>
        </div>
      </div>
    );
  }
}

export default Couners;
