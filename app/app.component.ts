// import Component code from angulary library
import { Component } from 'angular2/core';
import { Actor } from "./actor.model";
import { Movie } from "./movie.model";

// annotation
@Component({
  selector: 'my-app',
  template: `
    <div class = "container">
      <h1>Seattle Sci-Fi!</h1>
    </div>
  `
})
// class definition
export class AppComponent {

}
