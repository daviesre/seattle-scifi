import { Injectable } from 'angular2/core';

@Injectable()
export class GameLogicService {
  movieTitle;
  actorMovie;
  actorRoleName;
  quoteRole;

  constructor() {

  }

  setActorInfo(movie, roleName) {
    this.actorMovie = movie;
    this.actorRoleName = roleName;
    this.testForWin();
    // return this.testForWin();
  }

  setQuoteRole(role) {
    this.quoteRole = role;
    this.testForWin();
  }

  setMovieTitle(movie) {
    this.movieTitle = movie;
    this.testForWin();
    // return this.testForWin();
  }

  // setQuoteTitle(movie) {
  //   this.quoteRole = movie;
  //   this.testForWin();
  //   // return this.testForWin();
  // }

  testForWin() {
    if (
        this.movieTitle === this.actorMovie &&
        this.actorRoleName === this.quoteRole
      ) {
      alert("You win!");
      this.movieTitle = undefined;
      this.actorMovie = undefined;
      this.quoteRole = undefined;
      this.actorRoleName = undefined;
      this.quoteRole = undefined;
      // return true;
    } else if ( this.movieTitle === undefined ||
                this.actorMovie === undefined ||
                this.actorRoleName === undefined ||
                this.quoteRole === undefined
              ){
      console.log("ok, keep trying!");
      // return false;
    } else {
      alert("You lose, please try again");
      this.actorMovie = undefined;
      this.movieTitle = undefined;
      this.quoteRole = undefined;
      this.actorRoleName = undefined;
      this.quoteRole = undefined;
      // return false;
    }
  }
}
