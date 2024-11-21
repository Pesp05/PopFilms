import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../services/auth.service';
import { AccountService } from '../../services/account.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent implements OnInit {

  userName = '';
  userPhoto = '';


  constructor(
    private authService: AuthService,
    private accountService: AccountService
  ) {}

  ngOnInit(): void {
    this.authService.createSession().subscribe((response) => {
      localStorage.setItem('session_id', response.session_id);
      console.log('session_id', response.session_id);

      this.accountService.getAccountDetails().subscribe((response) => {
        localStorage.setItem('user_name', response.username);
        localStorage.setItem('user_photo', response.avatar.tmdb.avatar_path);
        localStorage.setItem('logged_in', 'true');
  
        this.userName = response.username;
        this.userPhoto = response.avatar.tmdb.avatar_path
          ? `https://image.tmdb.org/t/p/original${response.avatar.tmdb.avatar_path}`
          : '';
      });
    });
  }

  
}
