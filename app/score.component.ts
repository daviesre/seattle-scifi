import { Component } from 'angular2/core';


@Component({
  selector: 'score-display',
  inputs: ['score'],
  template:
  `
  <div class="row">
    <div class="col-xs-6">
      <h4>Player: {{score.name}}</h4>
    </div>
    <div class="col-xs-6">
      <h4>Points: {{score.points}}</h4>
    </div>
  </div>
  `,
})
export class ScoreComponent {

}
