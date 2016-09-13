import { Component, EventEmitter } from 'angular2/core';
import { Actor } from './actor.model';

@Component({
  selector: 'add-actor',
  outputs: ['onSubmitAddActor'],
  template:
  `
  <h3>Add Actor</h3>
  <input placeholder="ID" #newId>
  <input placeholder="First Name" #newFirstName>
  <input placeholder="Last Name" #newLastName>
  <input placeholder="Role" #newRole>
  <input placeholder="Role" #newMovie>
  <button (click)="addActor(newId, newFirstName, newLastName, newRole, newMovie)">Add Actor</button>
  `
})
export class AddActorComponent {
  public onSubmitAddActor: EventEmitter<Object>;
  constructor() {
    this.onSubmitAddActor = new EventEmitter();
  }
  addActor(id: HTMLInputElement, firstName: HTMLInputElement, lastName: HTMLInputElement, role: HTMLInputElement, movie: HTMLInputElement) {
    this.onSubmitAddActor.emit({
      id: id.value,
      firstName: firstName.value,
      lastName: lastName.value,
      role: role.value,
      movie: movie.value
    });
  }
}
