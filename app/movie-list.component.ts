import { Movie } from './movie.model';
import { Component } from 'angular2/core';
import { MovieComponent } from './movie.component';
import { AddMovieComponent } from './add-movie.component';
import { ActorListComponent } from './actor-list.component';
import { QuoteListComponent } from './quote-list.component';

@Component({
  selector: 'movie-list',
  inputs: ['movieList'],
  directives: [MovieComponent, AddMovieComponent, ActorListComponent, QuoteListComponent],
  template: `
    <movie-display *ngFor="#currentMovie of movieList"
      [movie]="currentMovie"></movie-display>
      <add-movie (onSubmitAddMovie)="createMovie($event)"></add-movie>
      <hr>
      <actor-list></actor-list>
      <hr>
      <quote-list></quote-list>
  `
})
export class MovieListComponent {
  public movieList: Movie[];

  constructor() {
    this.movieList = [
      new Movie(0, 1968, "Barbarella", "Roger Vadim", "In the distant future, a highly sexual woman is assigned with finding and stopping the evil Durand-Durand. Along the way, she encounters various unusual people.", "http://ia.media-imdb.com/images/M/MV5BMjExMzcwMjU4OV5BMl5BanBnXkFtZTgwNzYzMjU2MTE@._V1_SY1000_CR0,0,683,1000_AL_.jpg"),

      new Movie(1, 1982, "Blade Runner", "Ridley Scott", "A blade runner must pursue and try to terminate four replicants who stole a ship in space and have returned to Earth to find their creator.", "http://ia.media-imdb.com/images/M/MV5BZWZlYmEyYTItNGRjYy00ZmMxLWEzMWItM2Q2NjZlNTMwMjQ3XkEyXkFqcGdeQXVyNDYyMDk5MTU@._V1_SY1000_CR0,0,665,1000_AL_.jpg"),

      new Movie(2, 1984, "Dune", "David Lynch", "A Duke's son leads desert warriors against the galactic emperor and his father's evil nemesis when they assassinate his father and free their desert world from the emperor's rule.", "http://ia.media-imdb.com/images/M/MV5BNTkxMjkxNzg3Nl5BMl5BanBnXkFtZTgwNjUyMDI3NjE@._V1_.jpg"),

      new Movie(3, 2015, "Ex Machina", "Alex Garland", "A young programmer is selected to participate in a ground-breaking experiment in synthetic intelligence by evaluating the human qualities of a breath-taking humanoid A.I.", "http://ia.media-imdb.com/images/M/MV5BMTUxNzc0OTIxMV5BMl5BanBnXkFtZTgwNDI3NzU2NDE@._V1_SY1000_CR0,0,674,1000_AL_.jpg")
    ];
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
