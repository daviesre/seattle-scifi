import { Component } from 'angular2/core'
import { Actor } from './actor.model';
import { ActorComponent } from './actor.component';
//import edit later
//import new later

@Component({
  selector: 'actor-list',
  inputs: ['actorList'],
  directives: [ActorComponent], //create and update directives needed later
  template:
  `
  <actor-display *ngFor="#currentActor of actorList"
    (click)="actorClicked(currentActor)"
    [actor]="currentActor">
  </actor-display>
  `
})
export class ActorListComponent {
  public actorList: Actor[];
  //create and update methods needed later
}
