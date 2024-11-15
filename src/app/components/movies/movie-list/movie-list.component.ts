import { Component, OnInit } from '@angular/core';
import { Pelicula } from '../../../models/lista-peliculas-response.interface';
import { MoviesService } from '../../../services/movies.service';

@Component({
  selector: 'app-movie-list',
  templateUrl: './movie-list.component.html',
  styleUrl: './movie-list.component.css'
})
export class MovieListComponent implements OnInit{

  listaPeliculasPopulares :Pelicula[] =[];

  constructor(private movieService:MoviesService){}
  
  ngOnInit(): void {
    this.movieService.obtenerPeliculasPopulares().subscribe((data) => {
      this.listaPeliculasPopulares = data.results;
    })
  }


}
