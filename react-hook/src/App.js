import { useRef, useEffect } from 'react';

// useClick 정의
const useConfirm = (message = "", onConfirm, onCancel) => {
  if (!onConfirm || typeof callback !== "function"){
    console.log('onConfirm');
    return;
  }
  if (onCancel && typeof onCancel !== "function"){
    console.log('onCancel');
    return;
  }
  const confirmAction = () => {
    if(window.confirm(message)){
      onConfirm();
    } else {
      onCancel();
    }
  }
  return confirmAction;
}

//App
const App = () => {
  const deleteWorld = () => console.log("삭제됨...");
  const abort = () => console.log("취소됨..");
  const confirmDelete = useConfirm("정말 삭제하시겠습니까?", deleteWorld, abort);

  return (
    <div className="App">
      <button onClick={confirmDelete}>Delete</button>
    </div>
  );
}

export default App;
