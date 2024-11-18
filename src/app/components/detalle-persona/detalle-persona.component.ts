import { Component, OnInit } from '@angular/core';
import { ListaPersonasService } from '../../services/lista-personas.service';
import { detalle, Personas } from '../../models/lista-personas.interfaces';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-detalle-persona',
  templateUrl: './detalle-persona.component.html',
  styleUrl: './detalle-persona.component.css'
})
export class DetallePersonaComponent implements OnInit {
  constructor(private listaPersonasService: ListaPersonasService,  
    private route: ActivatedRoute) {}
 
   actorId: string | null = '';
   personaDetalle: detalle | undefined;
   persona: Personas | undefined;
 
  ngOnInit(): void {
    this.actorId = this.route.snapshot.paramMap.get('id');

    this.listaPersonasService.getDetalleId(Number(this.actorId)).subscribe((data) => {
      this.personaDetalle = data;
    });

    
  }

  getposterPath(posterPath: string): string {
    return `https://image.tmdb.org/t/p/w500` + posterPath;
  }
  
}
