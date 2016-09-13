import { Movie } from './movie.model';
import { Component } from 'angular2/core';
import { MovieComponent } from './movie.component';
import { ActorListComponent } from './actor-list.component';

@Component({
  selector: 'movie-list',
  inputs: ['movieList'],
  directives: [MovieComponent, ActorListComponent],
  template: `
    <p>Joel Says Hi</p>
    <movie-display *ngFor="#currentMovie of movieList"
      [movie]="currentMovie"></movie-display>
    <actor-list></actor-list>
  `
})
export class MovieListComponent {
  public movieList: Movie[];

  constructor() {
    this.movieList = [
      new Movie(3, "Ex Machina", "Alex Garland", "A young programmer is selected to participate in a ground-breaking experiment in synthetic intelligence by evaluating the human qualities of a breath-taking humanoid A.I.", "http://ia.media-imdb.com/images/M/MV5BMTUxNzc0OTIxMV5BMl5BanBnXkFtZTgwNDI3NzU2NDE@._V1_SY1000_CR0,0,674,1000_AL_.jpg"),
    ];
  }
}
