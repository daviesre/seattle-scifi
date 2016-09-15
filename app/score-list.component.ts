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
  <button class="btn btn-success"
    (click)="postScore({'name': 'TestPerson', 'points': 100})">
    Click to add test score data
  </button>
  <button class="btn btn-info" (click)="refreshScores()">
    Click to refresh score data
  </button>
  <score-display *ngFor="#currentScore of scores"
    [score]="currentScore">
  </score-display>
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
    this.getScores(self);
  }

  pushDataToArray(data) {
    var theDataArray: Object[] = [];
    for (var key in data) {
        var obj = data[key];
        theDataArray.push(obj)
    }
    this.scores = theDataArray;
    this.refreshScores();
  }

  refreshScores() {
    this.sortJson(this.scores, "points", "int", false);
  }

  //for testing - belongs in a scoring component or within the game component
  postScore(score) {
    var self=this;
    this.scoreService.postScores(score);
    this.getScores(self);
  }
  //end test method

  getScores(self): any {
    var theUrl = "https://ng-test-adb57.firebaseio.com/score.json";
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
          //Have to push data from Firebase to array to deal with Angular2
          self.pushDataToArray(data);
      }
    });
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
