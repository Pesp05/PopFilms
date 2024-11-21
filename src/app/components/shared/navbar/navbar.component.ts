import { Component } from '@angular/core';
import { AuthService } from '../../../services/auth.service';
import { CuentaService } from '../../../services/cuenta.service';
import { DetallesCuentaResponse } from '../../../models/detalles-cuenta.interface';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css'
})
export class NavbarComponent {
  isApproved: boolean = false;

  constructor(
    private authService: AuthService,
    private cuentaService: CuentaService
  ) {}

  createRequestToken() {
    this.authService.createRequestToken().subscribe((response) => {
      localStorage.setItem('token', response.request_token);

      // STEP 2 de la autenticación en TMDB (firma del token iniciando sesión en TMDB)
      window.location.href = `https://www.themoviedb.org/authenticate/${response.request_token}?redirect_to=http://localhost:4200/perfil`;
    });
  }

  isLoggedIn() {
    this.isApproved = true;
    return localStorage.getItem('logged_in') === 'true';
  }

  logout() {
    this.isApproved = false;
    localStorage.clear();
    window.location.href = 'http://localhost:4200/home';
  }
}