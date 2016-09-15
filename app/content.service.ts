import { Injectable } from 'angular2/core';


declare var $:any

@Injectable()
export class ContentService {
  getContent(): any {
    var theUrl = "http:\/\/localhost:4200/movie";
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
          console.log(data[0].title);
          console.log(data[0].actor[0].firstName);
          console.log(data[0].quote[0].body);
          theData = data;
          return data;
      }
    });
  }
}
