import { Component } from '@angular/core';
import { Pelicula } from '../../models/top-movie-list.interface';
import { Serie } from '../../models/top-serie-list.interface';
import { Personas } from '../../models/lista-personas.interfaces';
import { HomeService } from '../../services/home.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {
  listaPeliculasTop: Pelicula[] = [];
  listaSeriesTop: Serie[] = [];
  listaPersonasTop: Personas[] = [];
  

  constructor(private homeService: HomeService) { }

  ngOnInit() {
    this.homeService.getTopMoviesList().subscribe((resp) => {
      this.listaPeliculasTop = resp.results.slice(0, 5).map((peli:any)=>{
        return {
          ...peli,
          posterUrl:this.homeService.getMovieImageUrl(peli.poster_path),
        }
      });
    });

    this.homeService.getTopSeriesList().subscribe((resp) => {
      this.listaSeriesTop = resp.results.slice(0, 5).map((serie:any)=>{
        return {
          ...serie,
          posterUrl:this.homeService.getMovieImageUrl(serie.poster_path),
        }
      });
    });

    this.homeService.getPeopleList().subscribe((resp) => {
      this.listaPersonasTop = resp.results.slice(0, 5);
    });
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
  getposterPath(posterPath: string): string {
    return `https://image.tmdb.org/t/p/w500/${posterPath}`;
  }
}
