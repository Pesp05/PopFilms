import { Component, OnInit } from '@angular/core';
import { AccountService } from '../../services/authentication/account.service';
import { Pelicula } from '../../models/lista-peliculas-response.interface';

@Component({
  selector: 'app-peliculas-favoritas',
  templateUrl: './peliculas-favoritas.component.html',
  styleUrl: './peliculas-favoritas.component.css'
})
export class PeliculasFavoritasComponent implements OnInit {

  constructor (private accountService: AccountService) {}

  peliculasFavoritas: Pelicula[] = [];

  ngOnInit(): void {
    this.accountService.getAccountFavoriteMovies().subscribe((data) => {
      this.peliculasFavoritas = data.results;
    });
  }


  eliminarPeliculaDeFavoritos(pelicula: Pelicula): void {
    this.accountService.markAsFavorite(pelicula.id, 'movie', false);
      this.peliculasFavoritas = this.peliculasFavoritas.filter(({ id }) => id !== pelicula.id);
    
  }

  getPosterUrl(posterPath: string): string {
    return `https://image.tmdb.org/t/p/original${posterPath}`;
  }
}
