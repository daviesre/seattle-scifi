// import Component code from angulary library
import { Component } from 'angular2/core';
import { Actor } from "./actor.model";
import { Movie } from "./movie.model";
import { Quote }  from "./quote.model";
import { QuoteListComponent } from "./quote-list.component";
import { ActorListComponent } from "./actor-list.component";
import { MovieListComponent } from "./movie-list.component";

// annotation
@Component({
  selector: 'my-app',
  directives: [MovieListComponent],
  template: `
    <div class = "container">
      <h1>Seattle Sci-Fi!</h1>
    </div>

    <div class="container">
      <movie-list></movie-list>
    </div>
  `
})
// class definition
export class AppComponent {

}
