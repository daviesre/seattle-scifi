import { Component, EventEmitter } from 'angular2/core';
import { Actor } from './actor.model';

@Component({
  selector: 'add-actor',
  outputs: ['onSubmitAddActor'],
  template:
  `
  <h3>Add Actor</h3>
  <input placeholder="First Name" #newFirstName>
  <input placeholder="Last Name" #newLastName>
  <input placeholder="Role" #newRole>
  <input placeholder="ID" #newID>
  <button (click)="addActor(newFirstName, newLastName, newRole, newID)">Add Actor</button>
  `
})
export class AddActorComponent {
  public onSubmitAddActor: EventEmitter<Object>;
  constructor() {
    this.onSubmitAddActor = new EventEmitter();
  }
  addActor(firstName: HTMLInputElement, lastName: HTMLInputElement, role: HTMLInputElement, id: HTMLInputElement) {
    this.onSubmitAddActor.emit({
      firstName: firstName.value, lastName: lastName.value, role: role.value, id: id.value
    });
  }
}
