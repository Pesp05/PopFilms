import { Component, OnInit } from '@angular/core';
import { ListaPersonasService } from '../../services/lista-personas.service';
import { Personas } from '../../models/lista-personas.interfaces';

@Component({
  selector: 'app-lista-personas',
  templateUrl: './lista-personas.component.html',
  styleUrl: './lista-personas.component.css'
})
export class ListaPersonasComponent implements OnInit {



  constructor(private listaPersonasService: ListaPersonasService) { }
  paginaActual = 1;
  listaPersonas: Personas[] = [];

  ngOnInit(): void {
    this.listaPersonasService.getPersonas(this.paginaActual).subscribe((data) => {
      this.listaPersonas = data.results;
    });
  }
 getposterPath(posterPath: string): string {
    return `https://image.tmdb.org/t/p/w500/${posterPath}`;
  }
  
  cambiarPagina(): void {
    this.listaPersonasService.getPersonas(this.paginaActual).subscribe((data) => {
      this.listaPersonas = data.results;
    });
    scrollTo({top: 0, behavior: 'smooth'});
  }
}
