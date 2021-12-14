import { useEffect, useRef } from 'react';

// useFullscreen 정의
const useFullscreen = (callback) => {
  const element = useRef();
  const triggerFull = () => {
    if (element.current){
      element.current.requestFullscreen();
      if(callback && typeof callback === "function"){
        callback(true);
      }
    }
  };
  const exitFull = () => {
    document.exitFullscreen();
    if(callback && typeof callback === "function"){
      callback(false);
    }
  }
  return {element, triggerFull, exitFull};
}

//App
const App = () => {
  const onFullS = (isFull) => {
    console.log(isFull ? "We are full" : "We are small");
  }
  const { element, triggerFull, exitFull } = useFullscreen(onFullS);
  return (
    <div className="App" style={{ height: "1000vh" }}>
      <div ref={element}>
        <img
          src="https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885__480.jpg"
        ></img>
        <button onClick={exitFull}>풀스크린 나가기</button>
      </div>
      <button onClick={triggerFull}>풀스크린으로 보기</button>
    </div>
  );
}

export default App;
