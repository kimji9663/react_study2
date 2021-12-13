import { useEffect } from 'react';

// useBeforeLeave 정의
const useBeforeLeave = (onBefore) => {
  useEffect(() => {
    document.addEventListener("mouseleave", handle);
    return () => document.removeEventListener("mouseleave", handle);
  }, []);
  if(typeof onBefore !== "function"){
    return;
  }
  const handle = (event) => {
    const { clientY } = event;
    if(clientY <= 0){
      onBefore();
    }
  }
}

//App
const App = () => {
  const begForLife = () => console.log("정말로 정말로 떠나실건가요~ㅠㅠ");
  useBeforeLeave(begForLife);

  return (
    <div className="App">
      <h1>Hi</h1>
    </div>
  );
}

export default App;
