import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ListaSeriesService } from '../../services/lista-series.service';
import { DetalleSerieResponse } from '../../models/detalle-serie.interfaces';
import { Cast } from '../../models/creditos-serie.interface';
import { AccountService } from '../../services/authentication/account.service';

@Component({
  selector: 'app-detalle-serie',
  templateUrl: './detalle-serie.component.html',
  styleUrl: './detalle-serie.component.css'
})
export class DetalleSerieComponent implements OnInit {

  serieId: string | null = '';
  serie: DetalleSerieResponse | undefined;
  creditoSerie: Cast[] = [];
  valorSerie: number = 0;
  serieValorada: boolean = false;
  constructor(private route: ActivatedRoute, private servicioListaSeries: ListaSeriesService, private accountService: AccountService) { }
  ngOnInit(): void {
    this.serieId = this.route.snapshot.paramMap.get('id');
    
    this.servicioListaSeries.getDetalleSerie(parseInt(this.serieId!)).subscribe((response) => {
      this.serie = response;
    });
    this.servicioListaSeries.getCreditosSerie(parseInt(this.serieId!)).subscribe((response) => {
      this.creditoSerie = response.cast;
    });
  }
  
  getPosterUrl(posterPath: string): string {
    return `https://image.tmdb.org/t/p/original${posterPath}`;
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

  marcarComoFavorita(): void {
    if (this.serie) {
      this.accountService.markAsFavorite(this.serie.id, 'tv', true);
    }
  }


  verTrailer(serie: any) {
    this.servicioListaSeries.getSerieVideo(serie.id).subscribe((data) => {
      const key = data.results[0].key;
      const videoUrl = this.getVideoUrl(key);
      window.open(videoUrl, '_blank');
    });
  }

  getKeySerie(idSerie: number): string {
    let key = '';
    this.servicioListaSeries.getSerieVideo(idSerie).subscribe((data) => {
      key = data.results[0].key;
    });
    return key;
  }

  getVideoUrl(keySerie: string): string {
    return `https://www.youtube.com/watch?v=${keySerie}`;
  }
  valorarSerie() {
    this.servicioListaSeries.setRatingSerie(parseInt(this.serieId!), this.valorSerie).subscribe((response) => {
      this.serieValorada = true;
    });
    console.log(this.valorSerie);
  }
  quitarValoracion() {
    this.servicioListaSeries.deleteRatingSerie(parseInt(this.serieId!)).subscribe((response) => {
      this.serieValorada = false;
    });
  }
}
