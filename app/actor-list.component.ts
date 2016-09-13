import { Component } from 'angular2/core'
import { Actor } from './actor.model';
import { ActorComponent } from './actor.component';
import { AddActorComponent } from './add-actor.component';
import { ActorService } from './actor.service';
import { OnInit } from 'angular2/core';
import { EditActorDetailsComponent } from './edit-actor-details.component';
//import update later

@Component({
  selector: 'actor-list',
  inputs: ['actorList'],
  directives: [ActorComponent, AddActorComponent, EditActorDetailsComponent], //update directive needed later
  template:
  `
  <p>Hello</p>
  <actor-display *ngFor="#currentActor of actorList"
    (click)="actorClicked(currentActor)"
    [actor]="currentActor">
  </actor-display>
  <edit-actor-details *ngIf="selectedActor" [actor]="selectedActor"></edit-actor-details>
  <add-actor (onSubmitAddActor)="createActor($event)"></add-actor>
  `,
  providers: [ActorService]
})
export class ActorListComponent {
  public actorList: Actor[];
  public selectedActor: Actor;

  constructor(private actorService: ActorService) {

  }

  ngOnInit() {
    this.actorList = this.actorService.getActors();
  }

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
        actor.movie)
    );
  }
}
