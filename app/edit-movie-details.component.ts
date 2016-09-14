import { Component } from 'angular2/core';
import { Movie } from './movie.model';

@Component({
  selector: 'edit-movie-details',
  inputs: ['movie'],
  template: `
  <h4>{{movie.title}}</h4>
  <input [(ngModel)]="movie.id"/>
  <input [(ngModel)]="movie.year"/>
  <input [(ngModel)]="movie.title"/>
  <input [(ngModel)]="movie.director"/>
  <input [(ngModel)]="movie.description"/>
  <input [(ngModel)]="movie.image"/>
  `
})
export class EditMovieDetailsComponent{
  public movie: Movie;
}
