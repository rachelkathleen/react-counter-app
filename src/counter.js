import React, { Component } from 'react';
import Button from './button';

export default class Counter extends Component {
  state = {
    count: 0,
  };

  incrementCount = () => {
    this.setState({
      count: this.state.count + 1,
    });
  };

  decrementCount = () => {
    this.setState({
      count: this.state.count - 1,
    });
  };

  render() {
    let { count } = this.state;
    return (
      <div>
        <div className='count'>
          <h3>Count:</h3>
          <h1>{count}</h1>
        </div>
        <div className='buttons'>
          <Button id='plus' title={'-'} action={this.decrementCount} />
          <Button id='minus' title={'+'} action={this.incrementCount} />
        </div>
      </div>
    );
  }
}
