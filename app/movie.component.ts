import { Movie } from './movie.model';
import { Component, Input } from 'angular2/core';
import { GameLogicService } from './game-logic.service';

@Component({
  selector: 'movie-display',
  inputs: ['model'],
  template: `
  <div (click)="movieClicked(model)">
    <h3>{{ model.title }}</h3>
    <h2><img height="200" width="auto" src={{model.image}}></h2>
  </div>
  `,
  providers: [GameLogicService]
})
export class MovieComponent {
  public selectedMovie;

  constructor(private gameLogicService: GameLogicService) {

  }
  movieClicked(clickedMovie) {
    console.log(clickedMovie.title);
    this.sendMovieToService(clickedMovie.title);
  }

  sendMovieToService(movie: String) {
    this.gameLogicService.setMovieTitle(movie);
  }
}
