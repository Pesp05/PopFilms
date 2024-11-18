import { Component, OnInit } from '@angular/core';
import { MoviesService } from '../../../services/movies.service';
import { Pelicula } from '../../../models/lista-peliculas-response.interface';

@Component({
  selector: 'app-movie-list',
  templateUrl: './movie-list.component.html',
  styleUrl: './movie-list.component.css'
})
export class MovieListComponent implements OnInit{

  listaPeliculasPopulares :Pelicula[] =[];

  constructor(private movieService:MoviesService){}

  ngOnInit(): void {
    this.movieService.obtenerPeliculasPopulares().subscribe((data:any) => {
      this.listaPeliculasPopulares = data.results.map((peli:any)=>{
        return {
          ...peli,
          posterUrl:this.movieService.getImageUrl(peli.poster_path),
        }
      });
    })

  }

  verTrailer(peli: any) {
    this.movieService.obtenerTrailerPorId(peli.id).subscribe((data) => {
      const key = data.results[0].key;
      const videoUrl = this.getVideoUrl(key);
      window.open(videoUrl, '_blank');
    });
  }
  

  getVideoUrl(keyPeli: string): string {
    return `https://www.youtube.com/watch?v=${keyPeli}`;
  }


}
