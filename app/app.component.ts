// import Component code from angulary library
import { Component } from 'angular2/core';
import { Movie } from "./movie.model";
import { MovieListComponent } from "./movie-list.component";

// annotation
@Component({
  selector: 'my-app',
  directives: [MovieListComponent],
  template: `
    <div class = "container">
      <img class="logo-image" src="./resources/images/logo.png" alt="a logo of a spaceship">
    </div>

    <div class="container">
      <movie-list></movie-list>
    </div>
  `
})
// class definition
export class AppComponent {

}
