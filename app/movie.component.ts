import { Movie } from './movie.model';
import { Component } from 'angular2/core';

@Component({
  selector: 'movie-display',
  inputs: ['movie'],
  template: `
    <div class="container">
      <div class="movie-id">
        <h3>{{movie.id}}: {{ movie.title }}</h3>
        <h2><img height="200" width="auto" src={{movie.image}}></h2>
      </div>
      <div class="movie-description">
        <h4>directed by: {{movie.director}}</h4>
        <h4>{{movie.description}} ({{movie.year}})</h4>
      </div>
    </div>
  `
})
export class MovieComponent {
  public movie: Movie;
}
