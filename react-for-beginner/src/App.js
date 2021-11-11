import {useState, useEffect} from 'react';


function App() {
  const [value, setValue] = useState("");
  const [todos, setTodos] = useState([]);
  
  const onChange = (event) => {
    setValue(event.target.value);
  }

  const onSubmit = (event) => {
    event.preventDefault();
    console.log(value);
    if (value === ""){
      return;
    }
    //react.js는 함수의 첫번째 arugment로 현재 state로 보낸다. (currentArray 최초값: [])
    setTodos((currentArray) => [value, ...currentArray]);
    setValue("");
  };
  console.log(todos);

  return (
    <div>
      <form onSubmit={onSubmit}>
        <input onChange={onChange} value={value} type="text" placeholder="Write your to do..." />
        <button type="submit">Add to do</button>
      </form>
      <ul>
        {todos.map((item, index) => <li key={index}>{item}</li>)}
        {/* map메서드의 첫번째, 두번째, 세번째 인자값 규칙: Array.map(value: any, index: number, array: any[]) */}
      </ul>
    </div>
  );
}

export default App;
