import { Component } from 'angular2/core'
import { Actor } from './actor.model';
import { ActorComponent } from './actor.component';
import { AddActorComponent } from './add-actor.component';
import { ActorService } from './actor.service';
import { OnInit } from 'angular2/core';
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
  `,
  providers: [ActorService]
})
export class ActorListComponent {
  public actorList: Actor[];

  constructor(private actorService: ActorService) {

  }

  ngOnInit() {
    this.actorList = this.actorService.getActors();
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
