import { Component } from 'angular2/core'
import { Actor } from './actor.model';
import { ActorComponent } from './actor.component';
import { AddActorComponent } from './add-actor.component';

//for update
import { EditActorDetailsComponent } from './edit-actor-details.component';
import { OnInit } from 'angular2/core';
declare var $:any

@Component({
  selector: 'actor-list',
  inputs: ['actorList'],
  directives: [ActorComponent, AddActorComponent, EditActorDetailsComponent], //update directive needed later
  template:
  `
  <actor-display *ngFor="#currentActor of actorList"
    (click)="actorClicked(currentActor)"
    [actor]="currentActor">
  </actor-display>
  <edit-actor-details *ngIf="selectedActor" [actor]="selectedActor"></edit-actor-details>
  <add-actor (onSubmitAddActor)="createActor($event)"></add-actor>
  `,
})
export class ActorListComponent {
  public actorList: Actor[];
  public selectedActor: Actor;

  actorClicked(clickedActor: Actor): void {
    this.selectedActor = clickedActor;
  }

  //update method needed later
  createActor(actor) : void {
    this.actorList.push(
      new Actor(
        actor.id,
        actor.firstName,
        actor.lastName,
        actor.role,
        actor.movie,
        actor.imageUrl)
    );
  }
}
