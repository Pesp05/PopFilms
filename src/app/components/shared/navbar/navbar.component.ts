import { Component, EventEmitter, Output } from '@angular/core';
import { AuthService } from '../../../services/authentication/auth.service';
import { AccountService } from '../../../services/authentication/account.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css'
})
export class NavbarComponent {
  userName = '';
  userPhoto = '';
  busqueda = '';
  constructor(private authService: AuthService,
              private accountService: AccountService
  ) {}

  ngOnInit(): void {
    this.authService.createSession().subscribe((response) => {
      localStorage.setItem('session_id', response.session_id);
      console.log('session_id', response.session_id);

      this.accountService.getAccountDetails().subscribe((response) => {
        localStorage.setItem('user_name', response.name);
        localStorage.setItem('user_photo', response.avatar.tmdb.avatar_path);
        localStorage.setItem('logged_in', 'true');
  
        this.userName = response.name;
        this.userPhoto = response.avatar.tmdb.avatar_path
          ? `https://image.tmdb.org/t/p/original${response.avatar.tmdb.avatar_path}`
          : '';
      });
    });
}

  createRequestToken() {
    this.authService.createRequestToken().subscribe((response) => {
      localStorage.setItem('token', response.request_token);

      window.location.href = `https://www.themoviedb.org/authenticate/${response.request_token}?redirect_to=http://localhost:4200/home`;
    });
  }

  isLoggedIn() {
    return localStorage.getItem('logged_in') === 'true';
  }

  logout() {
    localStorage.clear();
    window.location.href = 'http://localhost:4200/home';
  }

  iniciarBusqueda() {
    window.location.href = `http://localhost:4200/busqueda?busqueda=${this.busqueda}`;
  }

}