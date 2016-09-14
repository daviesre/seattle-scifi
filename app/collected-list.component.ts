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
  `
})
export class CollectedListComponent{
  public content: Object[];
  constructor(private contentService: ContentService) {

  }
  ngOnInit() {
    this.content = this.contentService.getContent();
  }

}
