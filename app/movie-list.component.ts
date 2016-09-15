import { Movie } from './movie.model';
import { Component, EventEmitter } from 'angular2/core';
import { MovieComponent } from './movie.component';
import { GameLogicService } from './game-logic.service';

@Component({
  selector: 'movie-list',
  inputs: ['movieList'],
    directives: [MovieComponent],
  template: `
    <movie-display *ngFor="#currentMovie of movieList"
      (click)="movieClicked(currentMovie)"
      [class.selected]="currentMovie === selectedMovie"
      [movie]="currentMovie"></movie-display>
  `,
    providers: [GameLogicService]
})
export class MovieListComponent {
  public movieList: Movie[];
  public onMovieSelect: EventEmitter<Movie>;
  public selectedMovie: Movie;

  constructor(private gameLogicService: GameLogicService) {

  }

  movieClicked(clickedMovie) : void {
    this.selectedMovie = clickedMovie;
    console.log(clickedMovie);
    this.setMovieToService(clickedMovie.title);
  }

  setMovieToService(movie: String) {
    this.gameLogicService.setMovieTitle(movie)
  }
}
