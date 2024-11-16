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


}
