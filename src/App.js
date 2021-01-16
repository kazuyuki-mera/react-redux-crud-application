import React, { Component } from 'react';

class App extends Component {
  render() {
    return (
      <>
        <label htmlFor="bar">bar</label>
        <input
          id="bar"
          type="text"
          onChange={() => {
            console.log('I am Changed.');
          }}
        />
      </>
    );
  }
}

export default App;
