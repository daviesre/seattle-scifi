import { Movie } from './movie.model';
import { Component } from 'angular2/core';

@Component({
  selector: 'movie-display',
  inputs: ['movie'],
  template: `
    <h3>Movie Title</h3>
  `
})
export class MovieComponent {
  public movie: Movie;
}
