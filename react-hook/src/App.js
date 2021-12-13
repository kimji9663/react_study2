import { useEffect, useState } from 'react';

// useNetwork 정의
const useNetwork = onchange => {
  const handleChange = () => {
    if (typeof onchange === "function"){
      onchange(navigator.onLine);
    }
    setStatus(navigator.onLine);
  };
  useEffect(() => {
    window.addEventListener("online", handleChange);
    window.addEventListener("offline", handleChange);
    return () => {
      window.removeEventListener("online", handleChange);
      window.removeEventListener("offline", handleChange);
    }
  }, []) 
  const [status, setStatus] = useState(navigator.onLine);
  return status;
}

//App
const App = () => {
  const handleNetworkChange = (online) => {
    console.log(online ? "온라인이 되었습니다." : "오프라인이 되었습니다.")
  }
  const onLine = useNetwork(handleNetworkChange);

  return (
    <div className="App">
      <h1>{onLine ? "online" : "offline"}</h1>
    </div>
  );
}

export default App;
