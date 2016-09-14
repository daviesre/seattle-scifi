import { Component } from 'angular2/core'
import { Actor } from './actor.model';
import { ActorComponent } from './actor.component';
import { ActorService } from './actor.service';
import { OnInit } from 'angular2/core';
//import update later

@Component({
  selector: 'actor-list',
  inputs: ['actorList'],
  directives: [ActorComponent], //update directive needed later
  template:
  `
  <actor-display *ngFor="#currentActor of actorList"
    (click)="actorClicked(currentActor)"
    [actor]="currentActor">
  </actor-display>
  `,
})
export class ActorListComponent {
  public actorList: Actor[];
  public selectedActor: Actor;

  actorClicked(clickedActor: Actor): void {
    this.selectedActor = clickedActor;
    console.log(clickedActor)
  }
}
