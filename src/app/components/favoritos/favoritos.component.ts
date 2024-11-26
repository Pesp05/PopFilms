import { Component, Input, OnInit,  } from '@angular/core';
import { Serie } from '../../models/lista-series.interface';
import { AccountService } from '../../services/authentication/account.service';
import { Pelicula } from '../../models/lista-peliculas-response.interface';

@Component({
  selector: 'app-favoritos',
  templateUrl: './favoritos.component.html',
  styleUrl: './favoritos.component.css'
})
export class FavoritosComponent implements OnInit {

 constructor(private accountService: AccountService){}

seriesFavoritas: Serie[] = [];
peliculasFavoritas: Pelicula[] = [];

  ngOnInit(): void {
    this.accountService.getAccountFavoriteSeries().subscribe((data) => {
      this.seriesFavoritas = data.results;
    });

    this.accountService.getAccountFavoriteMovies().subscribe((data) => {
      this.peliculasFavoritas = data.results;
    });
  }

 
  getPosterUrl(posterPath: string): string {
    return `https://image.tmdb.org/t/p/original${posterPath}`;
  }

  eliminarSerieDeFavoritos(serie: Serie): void {
    this.accountService.markAsFavorite(serie.id, 'tv', false);
    this.seriesFavoritas = this.seriesFavoritas.filter(({ id }) => id !== serie.id);

  }

  eliminarPeliculaDeFavoritos(pelicula: Pelicula): void {
    this.accountService.markAsFavorite(pelicula.id, 'movie', false);
      this.peliculasFavoritas = this.peliculasFavoritas.filter(({ id }) => id !== pelicula.id);
    
  }
}
