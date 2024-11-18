import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'poster'
})
export class PosterPipe implements PipeTransform {

  transform(posterPath: string): string {
    return `https://image.tmdb.org/t/p/original${posterPath}`;
  }

}
