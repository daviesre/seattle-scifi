// import Component code from angulary library
import { Component } from 'angular2/core';
import { Movie } from "./movie.model";
import { CollectedListComponent } from "./collected-list.component";

// annotation
@Component({
  selector: 'my-app',
  directives: [CollectedListComponent],
  template: `
    <div class = "container">
      <h1>Seattle Sci-Fi!</h1>
    </div>

    <div class="container">
      <collected-list></collected-list>
    </div>
  `
})
// class definition
export class AppComponent {

}
