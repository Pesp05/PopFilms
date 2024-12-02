import { Component, OnInit } from '@angular/core';
import { MoviesService } from '../../../services/movies.service';
import { DetallePelicula } from '../../../models/lista-peliculas-response.interface';
import { ActivatedRoute } from '@angular/router';
import { Cast } from '../../../models/creditos-peliculas.interface';
import { AccountService } from '../../../services/authentication/account.service';
import { UserListsService } from '../../../services/user-lists.service';
import { CrudListasService } from '../../../services/crud-listas.service';
import { List } from '../../../models/user-lists-response.interface';

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
  listaDeListas: List[] = [];

  constructor(private route: ActivatedRoute, private movieService: MoviesService, private accountService: AccountService, private userListsService: UserListsService, private crudListasService: CrudListasService) { }


  ngOnInit(): void {
    this.peliId = this.route.snapshot.paramMap.get('id');

    this.movieService.getDetallePeli(parseInt(this.peliId!)).subscribe((response) => {
      this.peli = response;
    });
    this.movieService.getCreditosPeli(parseInt(this.peliId!)).subscribe((response) => {
      this.creditoPeli = response.cast;
    });

    this.userListsService.getUserLists().subscribe((resp) => {
      this.listaDeListas = resp.results;
    });
  }


  marcarComoFavorita(): void {
    if (this.peli) {
      this.accountService.markAsFavorite(this.peli.id, 'movie', true);
    }
  }


  verTrailer(peliculaId: string) {
    this.movieService.obtenerTrailerPorId(parseInt(peliculaId)).subscribe((data) => {
      const trailer = data.results.find((video) => video.type === 'Trailer' && video.site === 'YouTube');
      const key = trailer?.key;
      console.log('Trailer key:', key);
      if (key) {
        const videoUrl = this.getVideoUrl(key);
        window.open(videoUrl, '_blank');
      } else {
        console.error('Trailer key not found');
      }
    });
  }
  
  getVideoUrl(keyPelicula: string): string {
    return `https://www.youtube.com/watch?v=${keyPelicula}`;
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

  addToLista(listaId: number, peliculaId?: number) {
    this.crudListasService.addToLista(listaId, peliculaId).subscribe(() => {
      alert('Pelicula añadida a la lista');
    });
  }
}