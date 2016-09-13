import { Component } from 'angular2/core';
import { MovieComponent } from './movie.component';
import { Movie } from './movie.model';
import { ActorListComponent } from './actor-list.component';

@Component({
  selector: 'movie-list',
  inputs: ['movieList'],
  outputs: ['onMovieSelect'],
  directives: [MovieComponent, ActorListComponent],
  template: `
    <movie-display *ngFor="currentMovie of movieList"
      (click)="movieClicked(currentMovie)"
      [class.selected]="currentMovie === selectedMovie"
      [movie]="currentMovie">
    </movie-display>
    <actor-list></actor-list>
  `
})
export class MovieLIstComponent {
  public moives: Movie[];
  constructor() {

  }
}
