import { Component, OnInit } from '@angular/core';
import { AccountService } from '../../../services/authentication/account.service';
import { Pelicula } from '../../../models/lista-peliculas-response.interface';
import { Serie } from '../../../models/lista-series.interface';
import { WatchListService } from '../../../services/watch-list.service';

@Component({
  selector: 'app-watch-list',
  templateUrl: './watch-list.component.html',
  styleUrl: './watch-list.component.css'
})
export class WatchListComponent implements OnInit{

  moviesWatchlist:Pelicula[] = [];
  tvsWatchlist:Serie[] = [];

  constructor(private accountService:AccountService, private watchlistService:WatchListService ){}

  ngOnInit(): void {

    this.watchlistService.getMoviesWatchList().subscribe((data) => {
      this.moviesWatchlist = data.results;

    })

    this.watchlistService.getTvWatchList().subscribe((data)=>{
      this.tvsWatchlist = data.results;
    })
  }

  getPosterUrl(posterPath: string): string {
    return `https://image.tmdb.org/t/p/original${posterPath}`;
  }


}
