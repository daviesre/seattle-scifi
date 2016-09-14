import { Movie } from './movie.model';
import { Component } from 'angular2/core';
import { MovieListComponent } from './movie-list.component';
import { ActorListComponent } from './actor-list.component';
import { QuoteListComponent } from './quote-list.component';


@Component({
  selector: 'collected-list',
  inputs: ['collectedList'],
  directives: [MovieListComponent, ActorListComponent, QuoteListComponent],
  template: `
    <movie-list></movie-list>
    <hr>
    <actor-list></actor-list>
    <hr>
    <quote-list></quote-list>
    <hr>

  `
})
export class CollectedListComponent{

}
