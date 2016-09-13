import { Component, EventEmitter } from 'angular2/core';
import { MovieComponent } from './movie.component';
import { Movie } from './movie.model';

@Component({
  selector: 'movie-list',
  inputs: ['movieList'],
  outputs: ['onMovieSelect'],
  directives: [MovieComponent],
  template: `
    <movie-display>hello
    </movie-display>
  `
})
export class MovieListComponent {
  public movies: Movie[];
  public onMovieSelect: EventEmitter<Movie>;
  public selectedMovie: Movie;
  constructor() {
    this.onMovieSelect = new EventEmitter();
  }
  movieClicked(clickedMovie: Movie): void {
    this.selectedMovie = clickedMovie;
    this.onMovieSelect.emit(clickedMovie);
  }
}
