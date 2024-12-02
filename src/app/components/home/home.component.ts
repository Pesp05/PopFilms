import { Component } from '@angular/core';
import { Pelicula } from '../../models/top-movie-list.interface';
import { Serie } from '../../models/top-serie-list.interface';
import { Personas } from '../../models/lista-personas.interfaces';
import { HomeService } from '../../services/home.service';
import { WatchListService } from '../../services/watch-list.service';
import { AccountService } from '../../services/authentication/account.service';
import { List } from '../../models/user-lists-response.interface';
import { UserListsService } from '../../services/user-lists.service';
import { CrudListasService } from '../../services/crud-listas.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {

  listaPeliculasTop: Pelicula[] = [];
  listaSeriesTop: Serie[] = [];
  listaPersonasTop: Personas[] = [];
  listaDeListas: List[] = [];
  

  constructor(private homeService: HomeService, private watchListService: WatchListService, private accountService: AccountService, private userListsService: UserListsService, private crudListasService: CrudListasService) { }

  ngOnInit() {
    this.homeService.getTopMoviesList().subscribe((resp) => {
      this.listaPeliculasTop = resp.results.slice(0, 5).map(peli => {
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

    this.userListsService.getUserLists().subscribe((resp) => {
      this.listaDeListas = resp.results;
    });

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
    return `https://image.tmdb.org/t/p/w500/${posterPath}`;
  }

  addMovieToWatchList(peliculaId: number): void {
    this.watchListService.addToWatchList(peliculaId, 'movie', true);
  }

  addSerieToWatchList(serieId: number): void {
    this.watchListService.addToWatchList(serieId, 'tv', true)
  }

  marcarComoFavorita(serie: Serie) {
    this.accountService.markAsFavorite(serie.id, 'tv', true);
}

marcarPeliculaComoFavorita(pelicula: Pelicula) {
  this.accountService.markAsFavorite(pelicula.id, 'movie', true);
}

addToLista(listaId: number, peliculaId: number) {
  this.crudListasService.addToLista(listaId, peliculaId).subscribe(() => {
    alert('Pelicula añadida a la lista');
  });
}

}
