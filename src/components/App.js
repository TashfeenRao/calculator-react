/* eslint-disable react/state-in-constructor */
import React, { Component } from 'react';
import Disaply from './Display';
import ButtonPanel from './ButtonPanel';

class App extends Component {
  state = {
    result: '0',
  };

  handleClick = () => {

  }

  render() {
    const { result } = this.state;
    return (
      <div className="App">
        <div className="calculator">
          <Disaply result={result} />
          <ButtonPanel onClick={() => this.handleClick()} />
        </div>
      </div>
    );
  }
}

export default App;
