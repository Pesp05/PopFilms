import { Component, OnInit } from '@angular/core';
import { Genre } from '../../../models/genre-list-response.interface';
import { FiltroPeliculasService } from '../../../services/filtro-peliculas.service';

@Component({
  selector: 'app-filtro-peliculas',
  templateUrl: './filtro-peliculas.component.html',
  styleUrl: './filtro-peliculas.component.css'
})
export class FiltroPeliculasComponent implements OnInit {
languageFilter: string = '';
sortBy: string = '';
fechaEstrenoMin: string = '';
fechaEstrenoMax: string = '';
runtimeMin: string = '';
runtimeMax: string = '';
rateMin: string = '';
rateMax: string = '';
listaGeneros: Genre[] = [];

listaGenerosSeleccionados: Genre[] = [];

constructor(private filtroPeliculaService: FiltroPeliculasService) { }

  sendFilters() {
    window.location.href = `http://localhost:4200/movies?language=${this.languageFilter}&sortBy=${this.sortBy}&genres=${this.listaGenerosSeleccionados.map(g => g.name).join(',')}&releaseDateMin=${this.fechaEstrenoMin}&releaseDateMax=${this.fechaEstrenoMax}&runtimeMin=${this.runtimeMin}&runtimeMax=${this.runtimeMax}&rateMin=${this.rateMin}&rateMax=${this.rateMax}`;
  }

  ngOnInit() {
    this.filtroPeliculaService.getGenres().subscribe((response) => {
      this.listaGeneros = response.genres;
    });
  }

  toggleSelection(genero: Genre) {
    const index = this.listaGenerosSeleccionados.findIndex(g => g.id === genero.id);
    if (index === -1) {
      this.listaGenerosSeleccionados.push(genero);
    } else {
      this.listaGenerosSeleccionados.splice(index, 1);
    }
  }

  isSelected(genero: Genre): boolean {
    return this.listaGenerosSeleccionados.some(g => g.id === genero.id);
  }

}
