import { Component } from 'angular2/core'
import { Actor } from './actor.model';
import { ActorComponent } from './actor.component';
import { AddActorComponent } from './add-actor.component';
//import update later

@Component({
  selector: 'actor-list',
  inputs: ['actorList'],
  directives: [ActorComponent, AddActorComponent], //update directive needed later
  template:
  `
  <p>Hello</p>
  <actor-display *ngFor="#currentActor of actorList"
    [actor]="currentActor">
  </actor-display>
  <add-actor (onSubmitAddActor)="createActor($event)"></add-actor>
  `
})
export class ActorListComponent {
  public actorList: Actor[];

  constructor() {
    this.actorList = [
      new Actor(100, "FN100", "LN100", "Role100", "Movie100"),
      new Actor(101, "FN101", "LN101", "Role101", "Movie101"),
      new Actor(102, "FN102", "LN102", "Role102", "Movie102"),
      new Actor(103, "FN103", "LN103", "Role103", "Movie103"),
    ];
  }
  //update method needed later
  createActor(actor) : void {
    this.actorList.push(
      new Actor(
        actor.id,
        actor.firstName,
        actor.lastName,
        actor.role,
        actor.movie)
    );
  }
}
