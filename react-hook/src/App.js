import { useState } from 'react';

// useInput component
const useInput = (initial, validator) => {
  const [value, setValue] = useState(initial);
  const onChange = (event) => {
    const { target: {value} } = event;

    let willUpdate = true;

    if (typeof validator === "function"){
      willUpdate = validator(value);
    }

    if (willUpdate){
      setValue(value);
    }
  }
  return {value, onChange};
}

//App
const App = () => {
  const maxLength = (text) => text.length <= 10;
  const name = useInput("Ms.", maxLength);

  return (
    <div className="App">
      <input type="text" placeholder="mmm" value={name.value} onChange={name.onChange} />
      {console.log(name)}
    </div>
  );
}

export default App;
