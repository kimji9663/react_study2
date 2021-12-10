import { useEffect, useState } from 'react';


//App
const App = () => {
  const [ number, setNumber ] = useState(0);
  const [ anumber, setAnumber ] = useState(0);

  const sayHello = () => console.log("hello");
  useEffect(sayHello, []);

  return (
    <div className="App">
      <div>Hi</div>
      <button type="button" onClick={() => setNumber(number + 1)}>{number}</button>
      <button type="button" onClick={() => setAnumber(anumber + 1)}>{anumber}</button>
    </div>
  );
}

export default App;
