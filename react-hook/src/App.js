import { useState } from 'react';

const useTabs = (initialTabs, allTabs) => { // initial 초기값 = 0
  const [currentIndex, setCurrentIndex] = useState(initialTabs);
  if(!allTabs || !Array.isArray(allTabs)){
    return;
  }
  return { currentItem: allTabs[currentIndex], changeItem: setCurrentIndex };
};

const content = [
  {
    tab: "Section 1",
    content: "Section 1 콘텐츠임.."
  },
  {
    tab: "Section 2",
    content: "Section 2 콘텐츠임.."
  }
]


//App
const App = () => {
  const { currentItem, changeItem } = useTabs(0, content);
  return (
    <div className="App">
      {content.map((cont, index)=>
        <button type="button" onClick={() => changeItem(index)}>{cont.tab}</button>
      )}
      <div>{currentItem.content}</div>
    </div>
  );
}

export default App;
