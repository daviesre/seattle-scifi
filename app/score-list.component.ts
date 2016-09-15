import { Component } from 'angular2/core'
import { ScoreComponent } from './score.component';
import { ScoreService } from './score.service';
import { OnInit } from 'angular2/core';
declare var $:any

@Component({
  selector: 'score-list',
  viewBindings : [ScoreService],
  inputs: ['scoreList'],
  directives: [ScoreComponent], //update directive needed later
  template:
  `
  <h3>High Scores!</h3>
  <button class="btn btn-info" (click)="postScore({'name': 'TestPerson', 'points': 100})">Click to add test score data</button>
  <score-display *ngFor="#currentScore of scores"
    [score]="currentScore">
  </score-display>
  `,
  providers: [ScoreService]
})
export class ScoreListComponent {
  scores;
  object;

  constructor(private scoreService: ScoreService) {

  }
  ngOnInit() {
    var self=this;
    this.getScores(self);
  }

  //for testing - belongs in a scoring component or within the game component
  postScore(score) {
    this.scoreService.postScores(score);
  }
  //end test method

  getScores(self): any {
    var theUrl = "http:\/\/localhost:4200/score";
    var theData;

    $.ajax({
      type: "GET",
      headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json'
      },
      dataType: "json",
      url: theUrl,
      data: JSON.stringify(theData),
      success: function (data) {
          console.log(data);
          self.scores = data;
      }
    });
  }
}
