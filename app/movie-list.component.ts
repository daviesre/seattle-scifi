import { Component, EventEmitter } from 'angular2/core';
import { MovieComponent } from './movie.component';
import { Movie } from './movie.model';
import { ActorListComponent } from './actor-list.component';

@Component({
  selector: 'movie-list',
  inputs: ['movieList'],
  outputs: ['onMovieSelect'],
  directives: [MovieComponent, ActorListComponent],
  template: `
    <movie-display>hello
    </movie-display>
    <actor-list></actor-list>
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
