import { Component } from 'angular2/core';
import { Movie } from './movie.model';

@Component({
  selector: 'movie-display',
  inputs: ['movie'],
  template: `
      <h3>Title: </h3>
  `
})
export class MovieComponent {
  public movie: Movie;
}
