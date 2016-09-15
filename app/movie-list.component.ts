import { Movie } from './movie.model';
import { Component, Input} from 'angular2/core';
import { MovieComponent } from './movie.component';


@Component({
  selector: 'movie-list',
  inputs: ['model'],
  directives: [MovieComponent],
  template: `
  <h3 class="heading">Film: </h3>
    <movie-display *ngFor="#currentMovie of model"
      [model]="currentMovie"></movie-display>
  `
})
export class MovieListComponent {

}
