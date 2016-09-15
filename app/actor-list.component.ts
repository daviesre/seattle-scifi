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
    [actor]="currentActor"
    [content]="content">
  </actor-display>
  `,
})
export class ActorListComponent {
  content;
  public actorList: Actor[];
  public selectedActor: Actor;

  constructor() {
    this.actorList = [
      new Actor(0, "Daryl", "Hannah", "Pris", "Bladerunner (Director's Cut)", "/resources/images/daryl_hannah.jpg"),
      new Actor(1, "Alicia", "Vikander", "Eva", "Ex Machina", "/resources/images/alicia_vikander.jpg"),
      new Actor(2, "Kyle", "MacLachlan", "Paul", "Dune", "/resources/images/kyle_machlachlan.jpg"),
      new Actor(3, "Jane", "Fonda", "Barbarella", "Barbarella", "/resources/images/jane_fonda.jpg"),
    ];
  }

  actorClicked(clickedActor: Actor): void {
    this.selectedActor = clickedActor;
    console.log(clickedActor);
  }
}
