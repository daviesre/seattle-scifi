import { Component } from 'angular2/core';
import { Actor } from './actor.model';

@Component({
  selector: 'actor-display',
  inputs: ['actor'],
  //directives: [QuoteListComponent],
  template:
  `
  <img src={{actor.imageUrl}} alt={{actor.roleName}}>
  <h4>{{actor.firstName}} {{actor.lastName}}</h4>
  `
})
export class ActorComponent {
  public actor: Actor;

  //establish quote array and import from service?
  //public quotes: Quote[];
}
