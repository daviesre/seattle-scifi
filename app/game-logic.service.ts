import { Injectable } from 'angular2/core';

@Injectable()
export class GameLogicService {
  movieTitle: String;
  actorMovie: String;
  quoteMovie: String;

  setActorMovie(movie) {
    this.actorMovie = movie;
    console.log(this.actorMovie);
    // this.testForWin(this.movieTitle, this.actorMovie, this.quoteMovie)
  }

  setMovieTitle(movie) {
    this.movieTitle = movie;
  }

  setQuoteTitle(movie) {
    this.quoteMovie = movie;
  }

  testForWin(movieTitle, actorMovie, quoteMovie) {

  }
}
