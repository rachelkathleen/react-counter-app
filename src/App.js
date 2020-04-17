import React, { Component } from 'react';
import Counter from './counter';
import Form from './form';
import './style.css';

export default class App extends Component {
  render() {
    return (
      <div className='app'>
        <span>
          <Form />
        </span>
        <br />
        <span>
          <Counter />
        </span>
      </div>
    );
  }
}
