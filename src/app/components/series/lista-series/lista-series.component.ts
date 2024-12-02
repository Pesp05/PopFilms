import { Component, OnInit } from "@angular/core";
import { Serie } from "../../../models/lista-series.interface";
import { AccountService } from "../../../services/authentication/account.service";
import { ListaSeriesService } from "../../../services/lista-series.service";
import { WatchListService } from "../../../services/watch-list.service";
import { ActivatedRoute, Router } from "@angular/router";

@Component({
  selector: 'app-lista-series',
  templateUrl: './lista-series.component.html',
  styleUrl: './lista-series.component.css'
})
export class ListaSeriesComponent implements OnInit {
  sortBy: string = '';
  fechaEstrenoMin: string = '';
  fechaEstrenoMax: string = '';
  rateMin: string = '';
  rateMax: string = '';
  listaGeneros: string = '';

  listaSeries: Serie[] = [];
  serieMasPopular: Serie | undefined;
  paginaActual = 1;

  constructor(private servicioListaSeries: ListaSeriesService,
    private accountService: AccountService,
    private watchListService: WatchListService,
    private router: Router,
    private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.route.queryParams.subscribe((params) => {
        this.sortBy = params['sortBy'] || '',
        this.listaGeneros = params['genres'] || '',
        this.fechaEstrenoMin = params['releaseDateMin'] || '',
        this.fechaEstrenoMax = params['releaseDateMax'] || '',
        this.rateMin = params['rateMin'] || '',
        this.rateMax = params['rateMax'] || ''
    });
    if (this.sortBy || this.listaGeneros || this.fechaEstrenoMin || this.fechaEstrenoMax || this.rateMin || this.rateMax) {
      this.servicioListaSeries.obtenerSeriesPorFiltros(this.sortBy, this.listaGeneros,
        this.fechaEstrenoMin, this.fechaEstrenoMax, this.rateMin, this.rateMax).subscribe((serie: any) => {
          this.listaSeries = serie.results.map((serie: any) => {
            return {
              ...serie,
            }
          });
        });

    } else {

      this.servicioListaSeries.getPopularWithHeader(this.paginaActual).subscribe((data) => {
        this.listaSeries = data.results.splice(1);
        this.serieMasPopular = data.results[6];
      });
    }
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
  verTrailer(serie: any) {
    this.servicioListaSeries.getSerieVideo(serie.id).subscribe((data) => {
      const key = data.results[0].key;
      const videoUrl = this.getVideoUrl(key);
      window.open(videoUrl, '_blank');
    });
  }

  marcarComoFavorita(serie: Serie) {
    this.accountService.markAsFavorite(serie.id, 'tv', true);
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

  addSerieToWatchList(serieId: number): void {
    this.watchListService.addToWatchList(serieId, 'tv', true)
  }
  cambiarPagina(): void {
    this.servicioListaSeries.getPopularWithHeader(this.paginaActual).subscribe((data) => {
      this.listaSeries = data.results.slice(1);
      this.serieMasPopular = data.results[0];
    });
    scrollTo({ top: 0, behavior: 'smooth' });
    console.log(this.paginaActual);
  }

  getPosterUrl(posterPath: string): string {
    return `https://image.tmdb.org/t/p/original${posterPath}`;
  }
}
