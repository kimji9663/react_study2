import {action, makeObservable, observable} from "mobx";

class Movie {
    id;
    title;
    rate;

    constructor(id, title, rate) {
        this.id = id;
        this.title = title;
        this.rate = rate;
    }
}

export class MovieStore {
    rootStore;

    movies = [];

    constructor(root) {
        makeObservable(this, {
            movies: observable,
        })
        this.rootStore = root;
    }
}