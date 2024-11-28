import { Component, OnInit } from '@angular/core';
import { MoviesService } from '../../../services/movies.service';
import { DetallePelicula } from '../../../models/lista-peliculas-response.interface';
import { ActivatedRoute } from '@angular/router';
import { Cast } from '../../../models/creditos-peliculas.interface';
import { AccountService } from '../../../services/authentication/account.service';

@Component({
  selector: 'app-movie-detail',
  templateUrl: './movie-detail.component.html',
  styleUrl: './movie-detail.component.css'
})
export class MovieDetailComponent implements OnInit {

  peliId: string | null = '';
  peli: DetallePelicula | undefined;
  trailerUrl: string | null = null;
  showTrailer: boolean = false;
  creditoPeli: Cast[] = [];
  ratingPelicula: number = 0;
  peliculaValorada: boolean = false;

  constructor(private route: ActivatedRoute, private movieService: MoviesService, private accountService: AccountService) { }


  ngOnInit(): void {
    this.peliId = this.route.snapshot.paramMap.get('id');

    this.movieService.getDetallePeli(parseInt(this.peliId!)).subscribe((response) => {
      this.peli = response;
    });
    this.movieService.getCreditosPeli(parseInt(this.peliId!)).subscribe((response) => {
      this.creditoPeli = response.cast;
    });
  }


  marcarComoFavorita(): void {
    if (this.peli) {
      this.accountService.markAsFavorite(this.peli.id, 'movie', true);
    }
  }


  verTrailer(): void {
    if (!this.peli) return;

    this.movieService.obtenerTrailerPorId(this.peli.id).subscribe({
      next: (data) => {
        const trailer = data.results[0];
        if (trailer) {
          this.trailerUrl = `https://www.youtube.com/embed/${trailer.key}`;
          this.showTrailer = true;
        } else {
          alert('No se encontró un tráiler.');
        }
      },
      error: () => alert('Error al cargar el tráiler.'),
    });
  }

  cerrarTrailer(): void {
    this.trailerUrl = null;
    this.showTrailer = false;
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
  getposterPath(posterPath: string): string {
    return `https://image.tmdb.org/t/p/w500` + posterPath;
  }
  setMovieRating(rating: number): void {
    this.movieService.setRatingPeli(parseInt(this.peliId!), rating).subscribe();
  }

  onRateChange(newRating: number): void {
    this.ratingPelicula = newRating;
    newRating = newRating * 2;
    this.setMovieRating(newRating);
    this.peliculaValorada = true;
  }
  deleteRating(): void {
    this.movieService.deleteRatingPeli(parseInt(this.peliId!)).subscribe();
    this.peliculaValorada = false;
    this.ratingPelicula = 0;
  }
}