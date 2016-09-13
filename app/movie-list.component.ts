import { Component } from 'angular2/core';
import { MovieComponent } from './movie.component';
import { Movie } from './movie.model';
import { ActorListComponent } from './actor-list.component';

@Component({
  selector: 'movie-list',
  inputs: ['movieList'],
  outputs: ['onMovieSelect'],
  directives: [MovieComponent, ActorListComponent],
  template: `
    <movie-display>Test</movie-display>
    <actor-list></actor-list>
  `
})
export class MovieListComponent {
  public moives: Movie[];
  constructor() {

  }
}
