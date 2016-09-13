import { Component } from 'angular2/core';
import { Actor } from './actor.model';

@Component({
  selector: 'actor-display',
  inputs: ['actor'],
  //directives: [QuoteListComponent],
  template:
  `
  <h4>{{ actor.id }}</h4>
  <h4>{{ actor.firstName }}</h4>
  <h4>{{ actor.lastName }}</h4>
  <h4>{{ actor.role }}</h4>
  `
})
export class ActorComponent {
  public actor: Actor;

  //establish quote array and import from service?
  //public quotes: Quote[];
}
