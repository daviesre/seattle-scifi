import { Component, Input } from 'angular2/core';
import { Actor } from './actor.model';
import { GameLogicService } from './game-logic.service';

@Component({
  selector: 'actor-display',
  inputs: ['model'],
  //directives: [QuoteListComponent],
  template:
  `
  <div *ngFor="#actor of model.actor"
    (click)="actorClicked(actor)">
      <p><img src={{actor.imageUrl}} height="150" width="110"></p>
      <h4> {{actor.roleName}} </h4>
  </div>
  `
})
export class ActorComponent {

  constructor(private gameLogicService: GameLogicService) {

  }

  actorClicked(clickedActor) {
    this.gameLogicService.setActorMovie(clickedActor.movie);
    // this.getServiceResults()
  }
}
