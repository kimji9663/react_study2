import React, { Component } from 'react'
import PropTypes from "prop-types";

class App extends React.Component {
  state = { count: 0 }

  add = () => {
    this.setState(current => ({count: current.count + 1}));
  }

  minus = () => {
    this.setState(current => ({count: current.count - 1}));
  }

  render() {
    return (
      <div>
        <h1>Number {this.state.count}</h1>
        <button type="button" onClick={this.add}>+1</button>
        <button type="button" onClick={this.minus}>-1</button>
      </div>
    )
  }
}

export default App;
