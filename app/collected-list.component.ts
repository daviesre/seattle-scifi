import { Movie } from './movie.model';
import { Component } from 'angular2/core';
import { MovieListComponent } from './movie-list.component';
import { ActorListComponent } from './actor-list.component';
import { QuoteListComponent } from './quote-list.component';
import { ScoreListComponent } from './score-list.component';

//for importing JSON with GET request
import { ContentService } from './content.service';
import { OnInit } from 'angular2/core';
declare var $:any


@Component({
  selector: 'collected-list',
  inputs: ['collectedList'],
  directives: [MovieListComponent, ActorListComponent, QuoteListComponent, ScoreListComponent],
  template: `
    <div class="container">
      <div class="rows row">

        <div class="col-md-4">
          <movie-list [model]="content"></movie-list>
        </div>

        <div class="col-md-4">
          <actor-list [model]="content"></actor-list>
        </div>

        <div class="col-md-4">
          <quote-list [model]="content"></quote-list>
        </div>

      </div>
      <div class="row">
        <score-list></score-list>
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
    this.getContent(self);
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
