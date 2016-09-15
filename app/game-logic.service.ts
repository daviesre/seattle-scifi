import { Injectable } from 'angular2/core';

@Injectable()
export class GameLogicService {
  movieTitle;
  actorMovie;
  quoteMovie;

  constructor() {

  }

  setActorMovie(movie) {
    this.actorMovie = movie;
    return this.testForWin();
  }

  setMovieTitle(movie) {
    this.movieTitle = movie;
    return this.testForWin();
  }

  setQuoteTitle(movie) {
    this.quoteMovie = movie;
    return this.testForWin();
  }

  testForWin() {
    if (this.movieTitle === this.actorMovie && this.movieTitle === this.quoteMovie) {
      alert("You win!");
      this.actorMovie = undefined;
      this.movieTitle = undefined;
      this.quoteMovie = undefined;
      return true;
    } else if ( this.movieTitle === undefined ||
                this.actorMovie === undefined ||
                this.quoteMovie === undefined
              ){
      console.log("ok, keep trying!");
      return false;
    } else {
      console.log("Please try again");
      this.actorMovie = undefined;
      this.movieTitle = undefined;
      this.quoteMovie = undefined;
      return false;
    }
  }
}
