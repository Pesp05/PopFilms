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
    debugger;
    this.peliId = this.route.snapshot.paramMap.get('id');
    debugger;

    this.movieService.getDetallePeli(parseInt(this.peliId!)).subscribe((response) => {
      this.peli = response;
    });
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
}
