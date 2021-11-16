import {useEffect, useState} from 'react';


function App() {
  const [loading, setLoading] = useState(true);
  const [movies, setMovies] = useState([]);
  useEffect(() => {
    fetch("https://yts.mx/api/v2/list_movies.json?minimum_rating=8.5&sort_by=year")
    .then((respoonse) => respoonse.json())
    .then((json) => {
      setMovies(json.data.movies);
      setLoading(false);
    });
  }, []);//한번만 실행.
  console.log(movies);

  return (
    <div>
      {loading ? <h1>Loading</h1> : null}
    </div>
  );
}

export default App;
