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
  `,
  providers: [GameLogicService]
})
export class ActorComponent {
  // @Input() model: any;
  public selectedActor;

  constructor(private gameLogicService: GameLogicService) {

  }

  //establish quote array and import from service?
  //public quotes: Quote[];
  actorClicked(clickedActor): void {
    console.log(clickedActor.movie);
    this.sendActorToService(clickedActor.movie);
  }

  sendActorToService(movie: String) {
    this.gameLogicService.setActorMovie(movie);
  }
}
