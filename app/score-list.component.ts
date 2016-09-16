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
  <div class="score-board">
    <h3>High Scores!</h3>
    <hr>
    <h5>Log your score (honor system)!</h5>
    <input placeholder="Name" #newName>
    <input placeholder="Points" #newPoints>
    <hr>
    <button class="btn btn-success score-btn"
      (click)="postScore(newName.value, newPoints.value)">
      Click to add test score data
    </button>
    <hr>
    <score-display *ngFor="#currentScore of scores"
      [score]="currentScore">
    </score-display>
  </div>
  `,
  providers: [ScoreService]
})
export class ScoreListComponent {
  scores: {};
  object;

  constructor(private scoreService: ScoreService) {

  }
  ngOnInit() {
    var self=this;
    this.getScores();
  }

  pushDataToArray(data) {
    //this is called from getScores()
    var theDataArray: Object[] = [];
    for (var key in data) {
        var obj = data[key];
        theDataArray.push(obj)
    }
    this.scores = theDataArray;
    this.refreshScores();
  }

  refreshScores() {
    //this is called from pushDataToArray()
    this.sortJson(this.scores, "points", "int", false);
  }

  postScore(name, points) {
    var self=this;
    console.log(name, points);
    this.scoreService.postScores(name, points);
    this.getScores();
  }

  getScores() {
    var self=this;
    this.scoreService.getScores(self);
  }

  //Sort method for JSON by point value: http://stackoverflow.com/questions/881510/sorting-json-by-values
  sortJson(element, prop, propType, asc) {
  switch (propType) {
    case "int":
      element = element.sort(function (a, b) {
        if (asc) {
          return (parseInt(a[prop]) > parseInt(b[prop])) ? 1 : ((parseInt(a[prop]) < parseInt(b[prop])) ? -1 : 0);
        } else {
          return (parseInt(b[prop]) > parseInt(a[prop])) ? 1 : ((parseInt(b[prop]) < parseInt(a[prop])) ? -1 : 0);
        }
      });
      break;
    default:
      element = element.sort(function (a, b) {
        if (asc) {
          return (a[prop].toLowerCase() > b[prop].toLowerCase()) ? 1 : ((a[prop].toLowerCase() < b[prop].toLowerCase()) ? -1 : 0);
        } else {
          return (b[prop].toLowerCase() > a[prop].toLowerCase()) ? 1 : ((b[prop].toLowerCase() < a[prop].toLowerCase()) ? -1 : 0);
        }
      });
    }
  }
}
