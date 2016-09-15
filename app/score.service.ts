import { Injectable } from 'angular2/core';

declare var $:any

@Injectable()
export class ScoreService {

  postScores(score): any {
    var theUrl = "https://ng-test-adb57.firebaseio.com/score.json";

    $.ajax({
      type: "POST",
      headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json'
      },
      dataType: "json",
      url: theUrl,
      data: JSON.stringify(score),
      success: function (data) {
        console.log("success", data);
      }
    });
  }
}
