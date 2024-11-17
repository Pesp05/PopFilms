import { Component, OnInit } from '@angular/core';
import { Serie } from '../../models/lista-series.interface';
import { ListaSeriesService } from '../../services/lista-series.service';

@Component({
  selector: 'app-lista-series',
  templateUrl: './lista-series.component.html',
  styleUrl: './lista-series.component.css'
})
export class ListaSeriesComponent implements OnInit {
  listaSeries: Serie[] = [];
  serieMasPopular: Serie | undefined;

  constructor(private servicioListaSeries: ListaSeriesService) { }

  ngOnInit(): void {
    this.servicioListaSeries.getPopularWithHeader().subscribe((data) => {
      this.listaSeries = data.results;
      this.serieMasPopular = data.results[6];
    });
  }
  getPosterUrl(posterPath: string): string {
    return `https://image.tmdb.org/t/p/original${posterPath}`;
  }
  getColorEstrellas(voteAverage: number): string {
    if (voteAverage >= 7) {
      return 'text-success';
    } else if (voteAverage >= 4) {
      return 'text-warning';
    } else {
      return 'text-danger';
    }
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
}
