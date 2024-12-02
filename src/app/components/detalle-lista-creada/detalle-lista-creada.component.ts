import { Component, OnInit } from '@angular/core';
import { CrudListasService } from '../../services/crud-listas.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-detalle-lista-creada',
  templateUrl: './detalle-lista-creada.component.html',
  styleUrl: './detalle-lista-creada.component.css'
})
export class DetalleListaCreadaComponent implements OnInit{

  listaID: string | null = '';
  listaDetalle: any[] = [];
  constructor(private listaServicios: CrudListasService, private route: ActivatedRoute, private crudListasService: CrudListasService) { }

  ngOnInit() {
    this.listaID  = this.route.snapshot.paramMap.get('id');
    this.listaServicios.getDetalleLista(parseInt(this.listaID!)).subscribe((response) => {
      this.listaDetalle = response.items;
      console.log(response.items[0].posterPath);
    });
  }  
  getColorEstrellas(voteAverage: number): string {
    if (voteAverage >= 3.5) {
      return 'text-success';
    } else if (voteAverage >= 2.5) {
      return 'text-warning';
    } else {
      return 'text-danger';
    }
  }

  removePeliFromList(peliId: number) {
    this.crudListasService.removeFromLista(parseInt(this.listaID!), peliId).subscribe(() => {
      alert('Pelicula eliminada de la lista');
      window.location.reload();
    });
  }
}
