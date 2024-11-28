import { Component } from '@angular/core';

@Component({
  selector: 'app-filtro-peliculas',
  templateUrl: './filtro-peliculas.component.html',
  styleUrl: './filtro-peliculas.component.css'
})
export class FiltroPeliculasComponent {
languageFilter: string = '';
sortBy: string = '';

  sendFilters() {
    window.location.href = `http://localhost:4200/movies?language=${this.languageFilter}&sortBy=${this.sortBy}`;
  }

}
