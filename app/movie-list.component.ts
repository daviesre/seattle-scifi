import { Component, EventEmitter } from 'angular2/core';
import { MovieComponent } from './movie.component';
import { Movie } from './movie.model';

@Component({
  selector: 'movie-list',
  inputs: ['movieList'],
  outputs: ['onMovieSelect'],
  directives: [MovieComponent],
  template: `
    <movie-display *ngFor="currentMovie of movieList"
      (click)="movieClicked(currentMovie)"
      [class.selected]="currentMovie === selectedMovie"
      [movie]="currentMovie">
    </movie-display>
  `
})
export class MovieLIstComponent {
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
