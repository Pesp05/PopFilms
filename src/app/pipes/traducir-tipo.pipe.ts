import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'traducirTipo'
})
export class TraducirTipoPipe implements PipeTransform {

  transform(tipoMedia: string): string {
    if(tipoMedia == 'movie') {
      return 'Película';
    } else if (tipoMedia == 'tv') {
      return 'Serie';
    } else {
      return 'Desconocido';
    }
  }

}
