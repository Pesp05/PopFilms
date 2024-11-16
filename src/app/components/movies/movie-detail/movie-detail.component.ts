import { Component } from '@angular/core';
import { MoviesService } from '../../../services/movies.service';

@Component({
  selector: 'app-movie-detail',
  templateUrl: './movie-detail.component.html',
  styleUrl: './movie-detail.component.css'
})
export class MovieDetailComponent {

constructor(private moviesService:MoviesService){}

}
