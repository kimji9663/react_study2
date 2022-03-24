import {action, makeObservable, observable} from 'mobx';

// Movie 클래스 정의
class Movie {
    id;
    title;
    rate;

    constructor(id, title, rate){
        this.id = id;
        this.title = title;
        this.rate = rate;
    }
}


// movies가 바뀔 때마다 MovieStore를 리스닝하는 모든 컴포넌트가 변경된다.
export class MovieStore {
    rootStore;

    movies = [];

    constructor(root){
        makeObservable(this, {
            movies: observable,
            createMovie: action,
            changeRate: action,
        })

        this.rootStore = root;

        // movies에 내용 추가
        this.movies = [
            new Movie(1, 'LOTR', 5),
            new Movie(2, 'Harry Potter', 4),
            new Movie(3, 'John Wick', 0),
        ]
    }

    createMovie(title, rate){
        this.movies = [
            ...this.movies,
            new Movie(this.movies[this.movies.length - 1].id + 1, title, rate),
        ]
    }
    changeRate(id, rate){
        const idx = this.movies.findIndex((item) => item.id === id);
        const movie = this.movies[idx];
        this.movies = [
            ...this.movies.slice(0, idx),
            new Movie(movie.id, movie.title, rate),
            ...this.movies.slice(idx + 1, this.movies.length),
        ]
    }
    deleteMovie(id){
        this.movies = [
            ...this.movies.filter((item) => item.id !== id)
        ]
    }
}