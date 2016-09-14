import { Movie } from './movie.model';
import { Component } from 'angular2/core';

@Component({
  selector: 'movie-display',
  inputs: ['movie'],
  template: `
    <h3>{{ movie.title }}</h3>
    <h2><img height="200" width="auto" src={{movie.image}}></h2>
  `
})
export class MovieComponent {
  public movie: Movie;
}
