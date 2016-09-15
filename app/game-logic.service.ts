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
<<<<<<< HEAD
    return this.testForWin();
=======
    this.actorRoleName = roleName;
    this.testForWin();
>>>>>>> 8e413d57fe37cff4a76006defee6f04fb299f71b
  }

  setMovieTitle(movie) {
    this.movieTitle = movie;
    return this.testForWin();
  }

<<<<<<< HEAD
  setQuoteTitle(movie) {
    this.quoteMovie = movie;
    return this.testForWin();
=======
  setQuoteRole(role) {
    this.quoteRole = role;
    this.testForWin();
>>>>>>> 8e413d57fe37cff4a76006defee6f04fb299f71b
  }

  testForWin() {
    if (
        this.movieTitle === this.actorMovie &&
        this.actorRoleName === this.quoteRole
      ) {
      alert("You win!");
      this.actorMovie = undefined;
      this.movieTitle = undefined;
<<<<<<< HEAD
      this.quoteMovie = undefined;
      return true;
=======
      this.actorRoleName = undefined;
      this.quoteRole = undefined;
>>>>>>> 8e413d57fe37cff4a76006defee6f04fb299f71b
    } else if ( this.movieTitle === undefined ||
                this.actorMovie === undefined ||
                this.actorRoleName === undefined ||
                this.quoteRole === undefined
              ){
      console.log("ok, keep trying!");
      return false;
    } else {
      alert("You lose, please try again");
      this.actorMovie = undefined;
      this.movieTitle = undefined;
<<<<<<< HEAD
      this.quoteMovie = undefined;
      return false;
=======
      this.actorRoleName = undefined;
      this.quoteRole = undefined;
>>>>>>> 8e413d57fe37cff4a76006defee6f04fb299f71b
    }
  }
}
