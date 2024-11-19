import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'edadActor'
})
export class EdadActorPipe implements PipeTransform {

  transform(fechaNacimiento: string): number {
    return new Date().getFullYear() - new Date(fechaNacimiento).getFullYear();
  }
}
