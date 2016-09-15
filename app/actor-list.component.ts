import { Component } from 'angular2/core'
import { Actor } from './actor.model';
import { ActorComponent } from './actor.component';
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
