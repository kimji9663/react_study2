import {MovieStore} from './MovieStore';

export class rootStore {
    movieStore;

    constructor(){

        this.movieStore = new MovieStore(this);
    }
}