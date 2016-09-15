import { Movie } from './movie.model';
import { Component, Input } from 'angular2/core';
import { GameLogicService } from './game-logic.service';

@Component({
  selector: 'movie-display',
  inputs: ['model'],
  template: `
  <div (click)="movieClicked(model)">
    <figure>
      <h2><img height="200" width="auto" src={{model.image}}></h2>
        <h3>{{ model.title }}</h3>
        <figcaption>
          <h3>Directed by {{ model.director }}</h3>
          <h4> {{ model.description }}</h4>
        </figcaption>
    </figure>
  </div>
  `
})
export class MovieComponent {

  constructor(private gameLogicService: GameLogicService) {

  }

  movieClicked(clickedMovie) {
    this.gameLogicService.setMovieTitle(clickedMovie.title);
  }
}
