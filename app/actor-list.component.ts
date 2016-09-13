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
  <actor-display *ngFor="#currentActor of actorList"
    (click)="actorClicked(currentActor)"
    [actor]="currentActor">
  </actor-display>
  <add-actor (onSubmitAddActor)="createActor($event)"></add-actor>
  `
})
export class ActorListComponent {
  public actorList: Actor[];
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
