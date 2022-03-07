import { useState } from 'react';

const content = [
  {
    tab: 'Section1',
    content: 'Section 1입니다.'
  },
  {
    tab: 'Section2',
    contents: 'Section 2입니다.'
  }
]

const useTabs = (initialTab, allTabs) => {
  
}

//App
const App = () => {

  return (
    <div className="App">
      <h2>Hello</h2>
      {content.map( section => (
        <button type="button">{section.tab}</button>
      ))}
    </div>
  );
}

export default App;
