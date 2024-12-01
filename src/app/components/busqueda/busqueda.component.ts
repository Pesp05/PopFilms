import { Component, OnInit } from '@angular/core';
import { Result } from '../../models/busqueda-response.interface';
import { BusquedaService } from '../../services/busqueda.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-busqueda',
  templateUrl: './busqueda.component.html',
  styleUrl: './busqueda.component.css'
})
export class BusquedaComponent implements OnInit {
  listaEncontrados: Result[] = [];
  busqueda: string = '';

  constructor(
    private busquedaService: BusquedaService,
    private route: ActivatedRoute // Inyecta ActivatedRoute
  ) {}

  ngOnInit(): void {
    // Obtiene el parámetro 'busqueda' desde la URL
    this.route.queryParams.subscribe((params) => {
      this.busqueda = params['busqueda'] || ''; // Asigna el parámetro a 'busqueda'
      
      if (this.busqueda) {
        this.busquedaService.getBusqueda(this.busqueda).subscribe((resp) => {
          this.listaEncontrados = resp.results.map((peli:any)=>{
            return {
              ...peli,
              posterUrl:this.busquedaService.getImageUrl(peli.poster_path),
            }
          });
          
        });

      }
    });
  }

}
