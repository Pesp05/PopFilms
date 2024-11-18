import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ListaSeriesService } from '../../services/lista-series.service';
import { DetalleSerieResponse } from '../../models/detalle-serie.interfaces';

@Component({
  selector: 'app-detalle-serie',
  templateUrl: './detalle-serie.component.html',
  styleUrl: './detalle-serie.component.css'
})
export class DetalleSerieComponent implements OnInit {

  serieId: string | null = '';
  serie: DetalleSerieResponse | undefined;

  constructor(private route: ActivatedRoute, private servicioListaSeries: ListaSeriesService) { }

  ngOnInit(): void {
    debugger;
    this.serieId = this.route.snapshot.paramMap.get('id');
    debugger;
    
    this.servicioListaSeries.getDetalleSerie(parseInt(this.serieId!)).subscribe((response) => {
      this.serie = response;
    });
  }
}
