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
    <movie-list></movie-list>
    <hr>
    <actor-list></actor-list>
    <hr>
    <quote-list></quote-list>
    <hr>

  `,
  providers: [ContentService]
})
export class CollectedListComponent{
  public content: Object[];
  constructor(private contentService: ContentService) {

  }
  ngOnInit() {
    this.content = this.contentService.getContent();
  }

}
