import { Pipe, PipeTransform } from "angular2/core"
import { Movie } from './movie.model';

@Pipe ({
  name: "movieEra",
  pure: false
})

export class EraPipe implements PipeTransform {
  transform(input: Movie[], info) {
    var movieYear = info[0];
    var output: Movie[] = [];
    if (movieYear === "isNewWave") {
      for(var i = 0; i < input.length; i++) {
        if (input[i].year > 1959 && input[i].year < 1980) {
          output.push(input[i]);
        }
      }
    } else if (movieYear === "isGoldenAge") {
      for (let i = 0; i < input.length; i++) {
        if (input[i].year > 1937 && input[i].year < 1947) {
          output.push(input[i]);
        }
      }
    } else {
      return input;
    }
    return output;
  }
}
