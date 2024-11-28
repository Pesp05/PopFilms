import { Component, OnInit } from '@angular/core';
import { AccountService } from '../../../services/authentication/account.service';
import { Pelicula } from '../../../models/lista-peliculas-response.interface';
import { Serie } from '../../../models/lista-series.interface';
import { WatchListService } from '../../../services/watch-list.service';

@Component({
  selector: 'app-watch-list',
  templateUrl: './watch-list.component.html',
  styleUrl: './watch-list.component.css'
})
export class WatchListComponent implements OnInit {
  moviesWatchlist: Pelicula[] = [];
  tvsWatchlist: Serie[] = [];
  showMovies: boolean = true; // Determina si se muestran películas o series.

  constructor(private accountService: AccountService, private watchlistService: WatchListService) {}

  ngOnInit(): void {
    this.watchlistService.getMoviesWatchList().subscribe((data) => {
      this.moviesWatchlist = data.results;
    });

    this.watchlistService.getTvWatchList().subscribe((data) => {
      this.tvsWatchlist = data.results;
    });
  }

  getPosterUrl(posterPath: string): string {
    return `https://image.tmdb.org/t/p/original${posterPath}`;
  }

  deleteMovieToWatchlist(pelicula: Pelicula): void {
    this.watchlistService.removeMovieToWatchList(pelicula.id);
    this.moviesWatchlist = this.moviesWatchlist.filter(({ id }) => id !== pelicula.id);
  }

  deleteSerieToWatchlist(serie: Serie): void {
    this.watchlistService.removeSerieToWatchList(serie.id);
    this.tvsWatchlist = this.tvsWatchlist.filter(({ id }) => id !== serie.id);
  }

  toggleView(showMovies: boolean): void {
    this.showMovies = showMovies;
  }

  addMovieToWatchList(peliculaId: number): void {
    this.watchlistService.addToWatchList(peliculaId, 'movie', true)
  }

  addSerieToWatchList(serieId: number): void {
    this.watchlistService.addToWatchList(serieId, 'tv', true)
  }

}

