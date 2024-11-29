import { Component, OnInit } from '@angular/core';
import { AccountService } from '../../../services/authentication/account.service';
import { AuthService } from '../../../services/authentication/auth.service';
import { ValoradosService } from '../../../services/valorados.service';
import { Serie } from '../../../models/lista-series.interface';

@Component({
  selector: 'app-series',
  templateUrl: './series.component.html',
  styleUrl: './series.component.css'
})
export class SeriesValoradaComponent implements OnInit {

  cuentaID: number = 0;
  seriesValoradas: Serie[] = [];
  constructor(private authService: AuthService, private accountService: AccountService, private servicioValorados: ValoradosService) {}

  ngOnInit(): void {
    this.accountService.getAccountDetails().subscribe((response) => {
      this.cuentaID = response.id;
      console.log(this.cuentaID);
    });
    this.servicioValorados.getSeriesValoradas(this.cuentaID).subscribe((response) => {
      this.seriesValoradas = response.results;
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
}
