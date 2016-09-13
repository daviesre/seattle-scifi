import { Movie } from './movie.model';
import { Component } from 'angular2/core';
import { MovieComponent } from './movie.component';
import { ActorListComponent } from './actor-list.component';

@Component({
  selector: 'movie-list',
  inputs: ['movieList'],
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
