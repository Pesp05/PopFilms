import { Component, OnInit } from '@angular/core';
import { AccountService } from '../../services/authentication/account.service';
import { Serie } from '../../models/lista-series.interface';

@Component({
  selector: 'app-series-favoritas',
  templateUrl: './series-favoritas.component.html',
  styleUrl: './series-favoritas.component.css'
})
export class SeriesFavoritasComponent implements OnInit {

  constructor(private accountService: AccountService) { }

  seriesFavoritas: Serie[] = [];

  ngOnInit(): void {
    this.accountService.getAccountFavoriteSeries().subscribe((data) => {
      this.seriesFavoritas = data.results;
    });
  }

  getPosterUrl(posterPath: string): string {
    return `https://image.tmdb.org/t/p/original${posterPath}`;
  }

  eliminarSerieDeFavoritos(serie: Serie): void {
    this.accountService.markAsFavorite(serie.id, 'tv', false);
    this.seriesFavoritas = this.seriesFavoritas.filter(({ id }) => id !== serie.id);

  }
}
