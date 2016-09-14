import { Component } from 'angular2/core';
import { Actor } from './actor.model';


@Component({
  selector: 'edit-actor-details',
  inputs: ['actor'],
  template:
  `
  <h3>Edit Actor</h3>
  <input [(ngModel)]="actor.id"/>
  <input [(ngModel)]="actor.firstName"/>
  <input [(ngModel)]="actor.lastName"/>
  <input [(ngModel)]="actor.roleName"/>
  <input [(ngModel)]="actor.movie"/>
  `
})
export class EditActorDetailsComponent{
  public actor: Actor;
}
