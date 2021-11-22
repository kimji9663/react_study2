import React, { Component } from 'react'

class App extends React.Component {
  state = { count: 0 }

  add = () => {
    this.setState(current => ({count: current.count + 1}));
  }

  minus = () => {
    this.setState(current => ({count: current.count - 1}));
  }

  componentDidMount() {
    console.log("Component가 랜더링되었다.");
  }
  componentDidUpdate() {
    console.log("업데이트 되었다.");
  }
  componentWillUnmount() {
    console.log("component가 죽는다..");
  }

  render() {
    console.log("랜더링 중...")
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
