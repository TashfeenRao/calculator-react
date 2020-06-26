/* eslint-disable no-unused-vars */
import React, { Component } from 'react';
import Disaply from './Display';
import ButtonPanel from './ButtonPanel';
import calculate from '../logic/calculate';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      total: null,
      next: null,
      operation: null,
      result: '0',
    };
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick = btnName => {
    const neData = calculate(this.state, btnName);
    this.setState(neData);
  }

  render() {
    const { result, operation } = this.state;
    return (
      <div className="App">
        <div className="calculator">
          <Disaply result={result} />
          <ButtonPanel clickHandler={this.handleClick} />
        </div>
      </div>
    );
  }
}

export default App;
