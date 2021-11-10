import Button from "./Button";
import {useState, useEffect} from 'react';

function Hello() {
  // 작성방법1
  // function destroyFn() {
  //   console.log("destroyed :(");
  // }
  // function createFn() {
  //   console.log("created :)");
  //   return destroyFn; // 나타날 함수 안에 사라질 함수를 리턴
  // }
  // useEffect(createFn, []); // useEffect(나타날 함수, [])

  // 작성방법2 <---추천
  useEffect(() => {
    console.log("created :)");
    return() => console.log("destroyed :(");
  }, [])

  return <h1>Hello</h1>;
}

function App() {
  const [showing, setShowing] = useState(false);
  const onClick = () => {
    setShowing((prev) => !prev);
  }

  return (
    <div>
      {/* hello가 보이게 하거나 안보이게 하거나 */}
      {showing ? <Hello /> : null}
      {/* 버튼명이 hide / show로 바뀜 */}
      <button onClick={onClick}>{showing ? "Hide" : "Show"}</button>
    </div>
  );
}

export default App;
