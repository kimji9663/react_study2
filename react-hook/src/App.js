import { useState } from 'react';

// useInput component
const useInput = (initialValue, validator) => { //intialValue = Mr., validator = maxLen(함수)
  const [value, setValue] = useState(initialValue);
  const onChange = event => {
    console.log(event.target.value);
    const {
      target: {value} //Mr.
    } = event;
    
    let willUpdate = true;

    if (typeof validator === "function"){ // validator가 함수타입이면,
      willUpdate = validator(value); // true 또는 false
    }

    if (willUpdate) {
      setValue(value);
    }
  };
  return {value, onChange}; //props
};

const App = () => {
  const maxLen = (value) => value.length <= 10; //함수
  const name = useInput("Mr.", maxLen);
 
  return (
    <div className="App">
      <h1>hello</h1>
      <input type="text" placeholder="Name" {...name}></input>
      {/* {...name} = value={name.value} onChange={onChange} */}
      <br/>
      <br/>
      <h3 style={{marginBottom: 0}}>Test List</h3>
      {name.value}
    </div>
  );
}

export default App;
