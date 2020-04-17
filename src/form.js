import React, { Component } from 'react';
import statesData from './data/states-data';

export default class Form extends Component {
  state = { value: '' };

  handleChange = (event) => {
    this.setState({ value: event.target.value });
  };

  handleSubmit = (event) => {
    alert(this.state.value + ' was selected');
    event.preventDefault();
  };

  renderStateList = () => {
    return statesData.map((state) => (
      <option key={state.code} value={state.stateName}>
        {state.stateName}
      </option>
    ));
  };

  render() {
    return (
      <div className='form'>
        <form id='form' onSubmit={this.handleSubmit}>
          <label>
            <select value={this.state.value} onChange={this.handleChange}>
              {this.renderStateList()}
            </select>
          </label>
          <input id='submit' type='submit' value='Submit' />
        </form>
      </div>
    );
  }
}
