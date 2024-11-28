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

listaGeneros: Genre[] = [];
listaGenerosSeleccionados: Genre[] = [];

constructor(private filtroPeliculaService: FiltroPeliculasService) { }

  sendFilters() {
    window.location.href = `http://localhost:4200/movies?language=${this.languageFilter}&sortBy=${this.sortBy}`;
  }

  ngOnInit() {
    this.filtroPeliculaService.getGenres().subscribe((response) => {
      this.listaGeneros = response.genres;
    });
  }

  gestionarChecked() {
    if(document.getElementsByClassName('no-selected')){

    }
  }

}
