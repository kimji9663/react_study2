import {useEffect, useState} from 'react';


function App() {
  const [loading, setLoading] = useState(true);
  const [coins, setCoins] = useState([]);

  useEffect(() => {
    fetch("https://api.coinpaprika.com/v1/tickers")
    .then((respoonse) => respoonse.json())
    .then((json) => {
      setCoins(json);
      setLoading(false);
    });
  }, []);//한번만 실행.

  return (
    <div>
      <h1>The Coins! ({coins.length})</h1>
      
        {loading ? <stron>Loading...</stron> : null}
      
      <ul>
        {coins.map((coin) => (
          <li>{coin.name}({coin.symbol}) : {Math.round(coin.quotes.USD.price * 100) / 100}USD</li>
        ))}
      </ul>
    </div>
  );
}

export default App;
