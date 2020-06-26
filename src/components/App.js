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
    };
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick = btnName => {
    console.log(btnName);
  }

  render() {
    const { total, next, operation } = this.state;
    return (
      <div className="App">
        <div className="calculator">
          <Disaply total={total} next={next} />
          <ButtonPanel clickHandler={this.handleClick} />
        </div>
      </div>
    );
  }
}

export default App;
