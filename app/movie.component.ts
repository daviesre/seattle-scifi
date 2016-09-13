import { Movie } from './movie.model';
import { Component } from 'angular2/core';

@Component({
  selector: 'movie-display',
  inputs: ['movie'],
  template: `
    <h3>{{ movie.title }}</h3>
  `
})
export class MovieComponent {
  public movie: Movie;
}
