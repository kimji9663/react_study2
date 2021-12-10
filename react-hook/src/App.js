import { useEffect, useState } from 'react';

// useTitle 정의
const useTitle = initialTitle => {
  const [title, setTitle] = useState(initialTitle);
  const updateTitle = () => {
    const htmlTitle = document.querySelector("title");
    htmlTitle.innerText = title;
  };
  useEffect(updateTitle, [title])
  return setTitle;
}

//App
const App = () => {
  const titleUpdater = useTitle("Loading...");
  setTimeout(() => titleUpdater("Home"), 5000);

  return (
    <div className="App">
      <div>Hi</div>
    </div>
  );
}

export default App;
