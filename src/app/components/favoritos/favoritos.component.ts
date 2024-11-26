import { Component, Input, OnInit,  } from '@angular/core';
import { Serie } from '../../models/lista-series.interface';
import { AccountService } from '../../services/authentication/account.service';

@Component({
  selector: 'app-favoritos',
  templateUrl: './favoritos.component.html',
  styleUrl: './favoritos.component.css'
})
export class FavoritosComponent implements OnInit {
 
 constructor(private accountService: AccountService){}

seriesFavoritas: Serie[] = [];

  ngOnInit(): void {
    this.accountService.getAccountFavoriteSeries().subscribe((data) => {
      this.seriesFavoritas = data.results;
    });
  }

 
  

}
