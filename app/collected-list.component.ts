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
    <div class="container">
      <div class="rows">
        <div class="col-md-4">
          <div *ngFor="#item of content">
              <p><img src={{item.image}} height="150" width="115"></p>
              <h4> {{item.title}} </h4>
              <p>A film by {{item.director}}</p>
              <p>{{item.description}}</p>
          </div>
        </div>
        <div class="col-md-4">
          <div *ngFor="#item of content">
            <div *ngFor="#actor of item.actor">
                <p><img src={{actor.imageUrl}} height="150" width="110"></p>
                <h4> {{actor.roleName}} </h4>
            </div>
          </div>
        </div>
        <div class="col-md-4">
          <div *ngFor="#item of content">
            <div *ngFor="#quote of item.quote">
              <div class="col-md-6">
                <p align-vertical="middle"><em> {{quote.body}}</em></p>
              </div>
              <div class="col-md-6">
              <p><img src={{quote.image}} height="150" width="235"></p>
              </div>
            </div>
          </div>
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
          console.log(data);
          self.content = data;
      }
    });
  }

  // getContent() {
  //   this.content = this.contentService.getContent();
  //   console.log("HALP!");
  // }

}
