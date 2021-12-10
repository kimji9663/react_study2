import { useEffect, useRef } from 'react';

// useClick 정의
const useClick = (onClick) => {
  const element = useRef();
  useEffect(() => {
    if (typeof onClick !== "function"){
      return;
    }
    if(element.current){
      element.current.addEventListener("click", onClick);
    }
    return () => {
      if(element.current){
        element.current.removeListener("click", onClick);
      }
    }
  }, [])
  return typeof onClick !== "function" ? element : undefined;
}

//App
const App = () => {
  const sayHello = () => console.log("say Hello!");
  const title = useClick(sayHello);

  return (
    <div className="App">
      <h1 ref={title}>Hi</h1>
    </div>
  );
}

export default App;
