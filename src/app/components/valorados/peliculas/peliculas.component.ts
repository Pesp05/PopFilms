import { Component } from '@angular/core';
import { AccountService } from '../../../services/authentication/account.service';
import { AuthService } from '../../../services/authentication/auth.service';
import { ValoradosService } from '../../../services/valorados.service';
import { Pelicula } from '../../../models/lista-peliculas-response.interface';

@Component({
  selector: 'app-peliculas',
  templateUrl: './peliculas.component.html',
  styleUrl: './peliculas.component.css'
})
export class PeliculasValoradasComponent {

  cuentaID: number = 0;
  peliculasValoradas: Pelicula[] = [];
  constructor(private authService: AuthService, private accountService: AccountService, private servicioValorados: ValoradosService) {}

  ngOnInit(): void {
    this.accountService.getAccountDetails().subscribe((response) => {
      this.cuentaID = response.id;
      console.log(this.cuentaID);
    });
    this.servicioValorados.getPeliculasValoradas(this.cuentaID).subscribe((response) => {
      this.peliculasValoradas = response.results;
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
