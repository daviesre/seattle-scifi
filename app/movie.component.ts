import { Component } from 'angular2/core';
import { Movie } from './movie.model';

@Component({
  selector: 'movie-display',
  inputs: ['movie'],
  template: `
    <ul>
      <li>Title: {{movie.title}}</li>
    </ul>
  `
})
export class MovieComponent {
  public movie: Movie;
}
