import { Component, EventEmitter } from 'angular2/core';
import { Movie } from './movie.model';

@Component({
  selector: 'add-movie',
  outputs: ['onSubmitAddMovie'],
  template: `
    <h3>Add Movie</h3>
    <input placeholder="id" #newId>
    <input placeholder="Year of Production" #newYear>
    <input placeholder="Film Title" #newTitle>
    <input placeholder="Director" #newDirector>
    <input placeholder="Provide a Brief Description" #newDescription>
    <input placeholder="Provide an Image URL" #newImage>
    <button (click)="addMovie(newId, newYear, newTitle, newDirector, newDescription, newImage)">Add Film</button>
  `
})
export class AddMovieComponent {
  public onSubmitAddMovie: EventEmitter<Object>;
  constructor() {
    this.onSubmitAddMovie = new EventEmitter();
  }
  addMovie(id: HTMLInputElement, year: HTMLInputElement, title: HTMLInputElement, director: HTMLInputElement, description: HTMLInputElement, image: HTMLInputElement) {
    this.onSubmitAddMovie.emit({
      id: id.value,
      year: year.value,
      title: title.value,
      director: director.value,
      description: description.value,
      image: image.value
    });
  }
}
