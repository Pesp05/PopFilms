import { Component, OnInit } from '@angular/core';
import { MoviesService } from '../../../services/movies.service';
import { Pelicula } from '../../../models/lista-peliculas-response.interface';

@Component({
  selector: 'app-movie-detail',
  templateUrl: './movie-detail.component.html',
  styleUrl: './movie-detail.component.css'
})
export class MovieDetailComponent implements OnInit{

constructor(private moviesService:MoviesService){}

  ngOnInit(): void {

  }



}
