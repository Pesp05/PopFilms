import { Component, OnInit } from '@angular/core';
import { AccountService } from '../../../services/authentication/account.service';
import { Pelicula } from '../../../models/lista-peliculas-response.interface';
import { Serie } from '../../../models/lista-series.interface';

@Component({
  selector: 'app-watch-list',
  templateUrl: './watch-list.component.html',
  styleUrl: './watch-list.component.css'
})
export class WatchListComponent implements OnInit{

  filmsWatchlist:Pelicula[] = [];
  seriesWatchlist:Serie[] = [];
  constructor(private accountService:AccountService ){}

  ngOnInit(): void {

  }




}
