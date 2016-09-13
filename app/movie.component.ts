import { Movie } from './movie.model';
import { Component } from 'angular2/core';

@Component({
  selector: 'movie-display',
  inputs: ['movie'],
  template: `
    <h3>{{movie.id}}: {{ movie.title }}</h3>
    <h2><img height="200" width="auto" src={{movie.image}}></h2>
    <h4>directed by: {{movie.director}}</h4>
    <h4>{{movie.description}} ({{movie.year}})</h4>
  `
})
export class MovieComponent {
  public movie: Movie;
}
