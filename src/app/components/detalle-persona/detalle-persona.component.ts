import { Component, OnInit } from '@angular/core';
import { ListaPersonasService } from '../../services/lista-personas.service';
import { ActivatedRoute } from '@angular/router';
import { DetallePersonaResponse } from '../../models/details-personas.interfaces';
import { Cast, CreditosPersonasResponse } from '../../models/creditos-personas.interfaces';
import { Personas } from '../../models/lista-personas.interfaces';

@Component({
  selector: 'app-detalle-persona',
  templateUrl: './detalle-persona.component.html',
  styleUrl: './detalle-persona.component.css'
})
export class DetallePersonaComponent implements OnInit {
  constructor(private listaPersonasService: ListaPersonasService,  
    private route: ActivatedRoute) {}
 
   actorId: string | null = '';
   personaDetalle: DetallePersonaResponse | undefined;
   creditos: CreditosPersonasResponse | undefined;
   ListaPeliculas: Cast[] = [];
   totalCreditos: number = 0;
   listaPersonas: Personas[] = [];  
  
 
  ngOnInit(): void {
    this.actorId = this.route.snapshot.paramMap.get('id');

    this.listaPersonasService.getpersonasId(Number(this.actorId)).subscribe((resp) => {
      this.personaDetalle = resp;
    });

    this.listaPersonasService.getCreditosId(Number(this.actorId)).subscribe((resp) => {
      this.creditos = resp;
      this.totalCreditos = resp.cast.length + resp.crew.length;
    });

    this.listaPersonasService.getCreditosId(Number(this.actorId)).subscribe((resp) => {
      this.creditos = resp;
      this.ListaPeliculas = resp.cast;
    });
  }

  getposterPath(posterPath: string): string {
    return `https://image.tmdb.org/t/p/w500` + posterPath;
  }

  
  
}
