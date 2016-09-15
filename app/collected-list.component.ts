import { Movie } from './movie.model';
import { Component } from 'angular2/core';
import { MovieListComponent } from './movie-list.component';
import { ActorListComponent } from './actor-list.component';
import { QuoteListComponent } from './quote-list.component';

//for importing JSON with GET request
import { ContentService } from './content.service';
import { OnInit } from 'angular2/core';
declare var $:any


@Component({
  selector: 'collected-list',
  inputs: ['collectedList'],
  directives: [MovieListComponent, ActorListComponent, QuoteListComponent],
  template: `
  <h1 (click)="getContent()">{{content}} hiiiii</h1>
  <li *ngFor="#item of content">{{item.title}} hey hey hello</li>
    <div class="container">
      <div class="rows">
        <div class="col-md-4">
          <movie-list></movie-list>
        </div>
        <div class="col-md-4">
          <actor-list></actor-list>
        </div>
        <div class="col-md-4">
          <quote-list></quote-list>
        </div>
      </div>
    </div>
  `,
  providers: [ContentService]
})
export class CollectedListComponent{
  content;
  constructor(private contentService: ContentService) {

  }
  ngOnInit() {
    var self=this;
    this.getContent(self); }

  sendData(data){
    this.content = data;
  }

  getContent(self): any {
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
          console.log(this.content);
          console.log(data);
          console.log(data[0].title);
          self.content = data;
          console.log(this.content);
          return this.content;
      }
    }).then(function(data) {
      this.sendData(data);
    });
  }

  // getContent() {
  //   this.content = this.contentService.getContent();
  //   console.log("HALP!");
  // }

}
