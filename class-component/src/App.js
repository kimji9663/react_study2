import React from 'react';
import axios from 'axios';
import Movie from './movie';

class App extends React.Component {
  state = { isLoading: true, movies: [] };

  getMovies = async () => { //async, await 비동기함수, 기다린다
    // 방법1
    // const mmmovies = await axios.get("https://yts-proxy.nomadcoders1.now.sh/list_movies.json?sort_by=rating");
    //console.log(movies.data.data.movies);

    // 방법2 (더 나은 방법)
    const {
      data: {
        data: {movies}
      }
    } = await axios.get("https://yts-proxy.nomadcoders1.now.sh/list_movies.json?sort_by=rating");
    //console.log(movies);

    this.setState({movies, isLoading: false});
  };
  componentDidMount() {
    this.getMovies();
  };

  render() {
    const {isLoading, movies} = this.state; // =this.state.isLoading, =this.state.movies 와 같음.

    return (
      <section className="container">
        {isLoading ? (
          <div className="loader">
            <span className="Loader__text">로딩중...</span>
          </div>
        ) : (
          movies.map(movie => {
          // console.log(movie);
          return <Movie key={movie.id} id={movie.id} title={movie.title} summary={movie.summary} poster={movie.medium_cover_image} year={movie.year} genres={movie.genres} />;
        }))}
      </section>
    )
  }
}

export default App;
