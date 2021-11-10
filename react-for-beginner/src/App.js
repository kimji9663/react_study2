import Button from "./Button";
import {useState, useEffect} from 'react';

function App() {
  // useState
  const [counter, setValue] = useState(0); //초기값 0
  const [keyword, setKeyword] = useState("");

  // events
  const onClick = () => setValue((prev) => prev + 1);
  const onChange = (event) => setKeyword(event.target.value);
  const irunOnlyOnce = () => {
    console.log("I run only once"); // 한번만 실행
  }

  // useEffect
  useEffect(irunOnlyOnce, []);
  useEffect(() => {
    if (keyword != "" && keyword.length > 5){
      console.log("Search for", keyword); // 키워드가 바뀔때만 실행
    }
  }, [keyword]);
  useEffect(() => {
    console.log("Change counter", counter); // 카운터가 바뀔때만 실행
  }, [counter])


  return (
    <div>
      <h1>{counter}</h1>
      <input value={keyword} onChange={onChange} type="text" placeholder="Search here..." />
      <br/>
      <button onClick={onClick}>click me</button>
      <br/>
      <Button text={"continue"}></Button>
    </div>
  );
}

export default App;
