import { Component, Input } from 'angular2/core'
import { Actor } from './actor.model';
import { ActorComponent } from './actor.component';
//import update later

@Component({
  selector: 'actor-list',
  inputs: ['model'],
  directives: [ActorComponent], //update directive needed later
  template:
  `
  <h3>Actors</h3>
  <actor-display *ngFor="#currentMovie of model"
    [model]="currentMovie">
  </actor-display>
  `,
})
export class ActorListComponent {

}
