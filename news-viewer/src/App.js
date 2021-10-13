import React, { useState } from "react";
import axios from 'axios';

const App = () => {
  const [data, setData] = useState(null);
  const onClick = async () => {
    try {
      const response = await axios.get(
        'https://newsapi.org/v2/top-headlines?sources=techcrunch&apiKey=e5f89ebdee5e4be88742d94cf55582c8',
        );
        setData(response.data);
    } catch(e) {
      console.log(e);
    }
  };
  return (
    <div>
      <div>
        <button onClick={onClick}>불러오기</button>
      </div>
      {data && <textarea rows={7} value={JSON.stringify(data, null, 2)} readOnly={true}></textarea>}
    </div>
  )
}

export default App;