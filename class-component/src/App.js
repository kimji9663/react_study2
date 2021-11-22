import React from 'react'

class App extends React.Component {
  state = { isLoading: true }

  componentDidMount() {
    setTimeout(() => {
      this.setState({isLoading: false})
    }, 3000);
  }

  render() {
    const {isLoading} = this.state;
    return (
      <div>
        {isLoading ? "로딩중..." : "준비가 되었다."}
      </div>
    )
  }
}

export default App;
