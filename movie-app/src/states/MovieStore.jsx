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
            movies:observable,
        })

        this.rootStore = root;

        // movies에 내용 추가
        this.movies = [
            new Movie(1, 'LOTR', 5),
            new Movie(2, 'Harry Potter', 4),
            new Movie(3, 'John Wick', 0),
        ]
    }
}