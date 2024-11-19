import { Component, OnInit } from '@angular/core';
import { MoviesService } from '../../../services/movies.service';
import { DetallePelicula, Pelicula } from '../../../models/lista-peliculas-response.interface';
import { ActivatedRoute } from '@angular/router';

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

  constructor(private route: ActivatedRoute, private movieService: MoviesService) { }

  ngOnInit(): void {
    this.peliId = this.route.snapshot.paramMap.get('id');
    console.log('ID de película:', this.peliId);
  
    if (this.peliId) {
      this.movieService.getDetallePeli(parseInt(this.peliId)).subscribe({
        next: (response) => {
          console.log('Respuesta de la API:', response);
          this.peli = response;
        },
        error: (error) => {
          console.error('Error al obtener los detalles de la película:', error);
        }
      });
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
    if (voteAverage >= 7) {
      return 'text-success';
    } else if (voteAverage >= 4) {
      return 'text-warning';
    } else {
      return 'text-danger';
    }
  }

  getActoresPorPeli(){
    
  }
}
