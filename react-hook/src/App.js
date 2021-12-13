import { useEffect, useRef } from 'react';

// useFadeIn 정의
const useFadeIn = (duration = 1, delay = 0) => {
  const element = useRef();
  useEffect(() => {
    if (element.current) {
      const { current } = element;
      current.style.transition = `opacity ${duration}s ease-in-out ${delay}s`;
      current.style.opacity = 1;
    }
  }, [])
  if (typeof duration !== "number" || typeof delay !== "number"){
    return;
  };
  return {ref: element, style: { opacity: '0' }};
} 

//App
const App = () => {
  const fadeInH1 = useFadeIn(1, 2);
  const fadeInP = useFadeIn(5, 10);

  return (
    <div className="App">
      <h1 {...fadeInH1}>출석했습니다~</h1>
      <p {...fadeInP}>난 지각생...</p>
    </div>
  );
}

export default App;
