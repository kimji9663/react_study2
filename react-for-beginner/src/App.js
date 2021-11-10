import {useState, useEffect} from 'react';


function App() {
  const [value, setValue] = useState("");
  const onChange = (event) => {
    setValue(event.target.value);
  }

  const onSubmit = (event) => {
    event.preventDefault();
    console.log(value);
    if (value === ""){
      return;
    }
    setValue("");
  }

  return (
    <div>
      <form onSubmit={onSubmit}>
      <input onChange={onChange} value={value} type="text" placeholder="Write your to do..." />
      <button type="submit">Add to do</button>
      </form>
    </div>
  );
}

export default App;
