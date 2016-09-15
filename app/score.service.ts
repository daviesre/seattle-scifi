import { Injectable } from 'angular2/core';

declare var $:any

@Injectable()
export class ScoreService {
  
  postScores(): any {
    var theUrl = "http:\/\/localhost:4200/score";
    var theData;

    $.ajax({
      type: "POST",
      headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json'
      },
      dataType: "json",
      url: theUrl,
      data: JSON.stringify(theData),
      success: function (data) {
        return data;
      }
    });
  }
}
