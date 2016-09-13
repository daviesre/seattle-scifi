import { Injectable } from 'angular2/core';

import { Actor } from './actor.model';
import { ACTORS } from './actor-data';

@Injectable()
export class ActorService {
  getActors(): Actor[] {
    console.log(ACTORS);
    return ACTORS;
  }
}
