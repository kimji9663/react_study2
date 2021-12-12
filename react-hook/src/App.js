import { useRef, useEffect } from 'react';

// useClick 정의
const useClick = (onClick) => {
  const ref = useRef();
  useEffect(() => {
    const element = ref.current;
    if(element){
      element.addEventListener("click", onClick);
    }

    //ComponentwillUnmount
    return () => {
      if(element){
        element.removeEventListener("click", onClick);
      }
    }
  }, [onClick]);
  return ref.current;
}

//App
const App = () => {
  const sayHello = () => console.log("4q35534q");
  const title = useClick(sayHello);

  return (
    <div className="App">
      <h1 ref={title}>Hi</h1>
    </div>
  );
}

export default App;
