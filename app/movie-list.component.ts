import { Movie } from './movie.model';
import { Component, EventEmitter } from 'angular2/core';
import { MovieComponent } from './movie.component';
import { AddMovieComponent } from './add-movie.component';
import { ActorListComponent } from './actor-list.component';
import { QuoteListComponent } from './quote-list.component';
import { EditMovieDetailsComponent } from './edit-movie-details.component';
import { EraPipe } from './era.pipe';

@Component({
  selector: 'movie-list',
  inputs: ['movieList'],
  pipes: [EraPipe],
  directives: [MovieComponent, AddMovieComponent, ActorListComponent, EditMovieDetailsComponent, QuoteListComponent],
  template: `
  <div class="era-filter">
    <select (change)="onChange($event.target.value)">
      <option value="all" selected="selected">Show All Movies</option>
      <option value="isGoldenAge">Golden Age (1938-1946)</option>
      <option value="is50s">1950s (50s)</option>
      <option value="isNewWave">New Wave (60s-70s)</option>
      <option value="is80s"> 1980s (80s)</option>
      <option value="is90s"> 1990s (90s)</option>
      <option value="isCurrent">Current Sci-Fi (2000-Current)</option>
    </select>
  </div>
    <movie-display *ngFor="#currentMovie of movieList | movieEra:selectedEra"
      (click)="movieClicked(currentMovie)"
      [class.selected]="currentMovie === selectedMeal"
      [movie]="currentMovie"></movie-display>
      <edit-movie-details *ngIf="selectedMovie" [movie]="selectedMovie"></edit-movie-details>
      <add-movie (onSubmitAddMovie)="createMovie($event)"></add-movie>
      <hr>
      <actor-list></actor-list>
      <hr>
      <quote-list></quote-list>
  `
})
export class MovieListComponent {
  public movieList: Movie[];
  public onMovieSelect: EventEmitter<Movie>;
  public selectedMovie: Movie;
  public selectedEra: string = "all";
  onChange(optionFromMenu) {
    this.selectedEra = optionFromMenu;
  }

  constructor() {
    this.movieList = [
      new Movie(0, 1968, "Barbarella", "Roger Vadim", "In the distant future, a highly sexual woman is assigned with finding and stopping the evil Durand-Durand. Along the way, she encounters various unusual people.", "http://ia.media-imdb.com/images/M/MV5BMjExMzcwMjU4OV5BMl5BanBnXkFtZTgwNzYzMjU2MTE@._V1_SY1000_CR0,0,683,1000_AL_.jpg"),

      new Movie(1, 1982, "Blade Runner", "Ridley Scott", "A blade runner must pursue and try to terminate four replicants who stole a ship in space and have returned to Earth to find their creator.", "http://ia.media-imdb.com/images/M/MV5BZWZlYmEyYTItNGRjYy00ZmMxLWEzMWItM2Q2NjZlNTMwMjQ3XkEyXkFqcGdeQXVyNDYyMDk5MTU@._V1_SY1000_CR0,0,665,1000_AL_.jpg"),

      new Movie(2, 1984, "Dune", "David Lynch", "A Duke's son leads desert warriors against the galactic emperor and his father's evil nemesis when they assassinate his father and free their desert world from the emperor's rule.", "http://ia.media-imdb.com/images/M/MV5BNTkxMjkxNzg3Nl5BMl5BanBnXkFtZTgwNjUyMDI3NjE@._V1_.jpg"),

      new Movie(3, 2015, "Ex Machina", "Alex Garland", "A young programmer is selected to participate in a ground-breaking experiment in synthetic intelligence by evaluating the human qualities of a breath-taking humanoid A.I.", "http://ia.media-imdb.com/images/M/MV5BMTUxNzc0OTIxMV5BMl5BanBnXkFtZTgwNDI3NzU2NDE@._V1_SY1000_CR0,0,674,1000_AL_.jpg")
    ];
  }

  movieClicked(clickedMovie: Movie) : void {
    this.selectedMovie = clickedMovie;
    console.log(clickedMovie);
  }

  createMovie(movie) : void {
    this.movieList.push(
      new Movie(
        movie.id,
        movie.year,
        movie.title,
        movie.director,
        movie.description,
        movie.image)
    );
  }
}
