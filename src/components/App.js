import React, { Component } from 'react';
import Disaply from './Display'
class App extends Component {
  state = {
    result: '0'
  }
  render() {
    return (
      <div className="App">
        <Disaply result={this.state.result} />
      </div>
    );
  }
}

export default App;
