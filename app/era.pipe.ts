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
      for (var i = 0; i < input.length; i++) {
        if (input[i].year > 1937 && input[i].year < 1947) {
          output.push(input[i]);
        }
      }
    } else if (movieYear === "isCurrent") {
      for(var i = 0; i < input.length; i++) {
        if(input[i].year > 1999) {
          output.push(input[i]);
        }
      }
    } else if (movieYear === "is50s") {
      for(var i = 0; i < input.length; i++) {
        if(input[i].year > 1949 && input[i].year < 1960) {
          output.push(input[i]);
        }
      }
    } else if (movieYear === "is80s") {
      for(var i = 0; i < input.length; i++) {
        if (input[i].year > 1979 && input[i].year < 1990) {
          output.push(input[i]);
        }
      }
    } else if (movieYear === "is90s") {
      for(var i = 0; i < input.length; i++) {
        if(input[i].year > 1989 && input[i].year < 2000) {
          output.push(input[i]);
        }
      }
    }
    else {
      return input;
    }
    return output;
  }
}
