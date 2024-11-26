import { Injectable } from '@angular/core';
import { AuthService } from './authentication/auth.service';
import { AccountService } from './authentication/account.service';

@Injectable({
  providedIn: 'root'
})
export class WatchListService {

  constructor(private account: AccountService) { }

  getMoviesWatchList(){
    this
  }
}
