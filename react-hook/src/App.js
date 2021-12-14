import { useEffect, useState } from 'react';

// useScroll 정의
const useScroll = () => {
  const [state, setState] = useState({
    x: 0,
    y: 0
  });

  useEffect(() => {
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const onScroll = event => {
    setState({y : window.scrollY, x : window.scrollX});
  };

  return state;
};

//App
const App = () => {
  const {y} = useScroll();
  return (
    <div className="App" style={{ height: "1000vh" }}>
      <h1 style={{ position: "fixed", color: y > 100 ? "red" : "blue" }}>Hi</h1>
    </div>
  );
}

export default App;
