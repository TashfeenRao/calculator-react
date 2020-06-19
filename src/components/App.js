import React, { Component } from 'react';
import Disaply from './Display';
import ButtonPanel from './ButtonPanel';

class App extends Component {
  state = {
    result: '0'
  }
  handleClick = () => {

  }
  render() {
    return (
      <div className="App">
        <Disaply result={this.state.result} />
        <ButtonPanel onClick={() => this.handleClick()}/>
      </div>
    );
  }
}

export default App;
