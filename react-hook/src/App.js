import { useEffect, useState, useRef } from 'react';



//App
const App = () => {
  const potiata = useRef();
  //setTimeout(() => console.log(potiata.current), 5000) // <input placeholder="la">
  
  // '?'로 유효성 검사 후 실행
  //setTimeout(() => potiata.current?.focus(), 5000); // 5초 뒤 포커스 됨

  // useEffect로 마운트가 끝난 뒤에 실행
  useEffect(() => {
    setTimeout(() => potiata.current?.focus(), 5000); // 5초 뒤 포커스 됨
  });

  return (
    <div className="App">
      <div>Hi</div>
      <input ref={potiata} placeholder='la' />
    </div>
  );
}

export default App;
