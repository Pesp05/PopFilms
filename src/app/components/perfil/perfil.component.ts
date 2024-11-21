import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../services/auth.service';
import { CuentaService } from '../../services/cuenta.service';

@Component({
  selector: 'app-perfil',
  templateUrl: './perfil.component.html',
  styleUrl: './perfil.component.css'
})
export class PerfilComponent implements OnInit {
  userName = '';
  userPhoto = '';

  constructor(
    private authService: AuthService,
    private cuentaService: CuentaService
  ) {}

  ngOnInit(): void {
      this.authService.createSession().subscribe((response) => {
        localStorage.setItem('session_id', response.session_id);
        console.log('session_id', response.session_id);

        this.cuentaService.getAccountDetails().subscribe((response) => {
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

}