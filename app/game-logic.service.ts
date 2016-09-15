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
    this.testForWin();
  }

  setMovieTitle(movie) {
    this.movieTitle = movie;
    this.testForWin();
  }

  setQuoteTitle(movie) {
    this.quoteMovie = movie;
    this.testForWin();
  }

  testForWin() {
    if (this.movieTitle === this.actorMovie && this.movieTitle === this.quoteMovie) {
      alert("You win!");
      this.actorMovie = undefined;
      this.movieTitle = undefined;
      this.quoteMovie = undefined;
    } else if ( this.movieTitle === undefined ||
                this.actorMovie === undefined ||
                this.quoteMovie === undefined
              ){
      console.log("ok, keep trying!");
    } else {
      console.log("Please try again");
      this.actorMovie = undefined;
      this.movieTitle = undefined;
      this.quoteMovie = undefined;
    }
  }
}
