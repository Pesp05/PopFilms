import { Component, OnInit } from '@angular/core';
import { AccountService } from '../../../services/authentication/account.service';

@Component({
  selector: 'app-watch-list',
  templateUrl: './watch-list.component.html',
  styleUrl: './watch-list.component.css'
})
export class WatchListComponent implements OnInit{

  watchlist:any[] = [];

  constructor(private accountService:AccountService ){}

  ngOnInit(): void {

  }




}
