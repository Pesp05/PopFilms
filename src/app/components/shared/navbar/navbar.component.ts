<<<<<<< Updated upstream
import { Component, inject, TemplateRef } from '@angular/core';
=======
import { Component, inject, TemplateRef, EventEmitter, Output } from '@angular/core';
>>>>>>> Stashed changes
import { AuthService } from '../../../services/authentication/auth.service';
import { AccountService } from '../../../services/authentication/account.service';
import { NgbOffcanvas } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css'
})
export class NavbarComponent {

  userName = '';
  userPhoto = '';
<<<<<<< Updated upstream
=======
  busqueda = '';
>>>>>>> Stashed changes
  isCollapsed = true;
  isFavoritesCollapsed = true;
  constructor(private authService: AuthService,
              private accountService: AccountService
  ) {}

  ngOnInit(): void {
    this.accountService.getAccountDetails().subscribe((response) => {
      this.userName = response.username ? response.username : "User";
      this.userPhoto = response.avatar.tmdb.avatar_path
      ? `https://image.tmdb.org/t/p/original${response.avatar.tmdb.avatar_path}`
      : 'https://cdn3.iconfinder.com/data/icons/basic-ui-element-s94-3/64/Basic_UI_Icon_Pack_-_Glyph_user-512.png';
    })

}

  createRequestToken() {
    this.authService.createRequestToken().subscribe((response) => {
      localStorage.setItem('token', response.request_token);

<<<<<<< Updated upstream
=======
      //window.location.href = `https://www.themoviedb.org/authenticate/${response.request_token}?redirect_to=http://localhost:4200/home`;
>>>>>>> Stashed changes
      // STEP 2 de la autenticación en TMDB (firma del token iniciando sesión en TMDB)
      window.location.href = `https://www.themoviedb.org/authenticate/${response.request_token}?redirect_to=http://localhost:4200/approved`;
    });
  }

  isLoggedIn() {
    return localStorage.getItem('logged_in') === 'true';
  }

  logout() {
    localStorage.clear();
    window.location.href = 'http://localhost:4200/home';
  }

<<<<<<< Updated upstream
=======
  iniciarBusqueda() {
    window.location.href = `http://localhost:4200/busqueda?busqueda=${this.busqueda}`;
  }

>>>>>>> Stashed changes
  toggleFavorites(): void {
    this.isFavoritesCollapsed = !this.isFavoritesCollapsed;
  }

  //---------------------------------------------------------------------------------

  private offcanvasService = inject(NgbOffcanvas);

	openEnd(content: TemplateRef<any>) {
		this.offcanvasService.open(content, { position: 'end' });
	}

	openTop(content: TemplateRef<any>) {
		this.offcanvasService.open(content, { position: 'top' });
	}

	openBottom(content: TemplateRef<any>) {
		this.offcanvasService.open(content, { position: 'bottom' });
	}

	openNoBackdrop(content: TemplateRef<any>) {
		this.offcanvasService.open(content, { backdrop: false });
	}

	openStaticBackdrop(content: TemplateRef<any>) {
		this.offcanvasService.open(content, { backdrop: 'static' });
	}

	openScroll(content: TemplateRef<any>) {
		this.offcanvasService.open(content, { scroll: true });
	}

	openNoKeyboard(content: TemplateRef<any>) {
		this.offcanvasService.open(content, { keyboard: false });
	}

	openNoAnimation(content: TemplateRef<any>) {
		this.offcanvasService.open(content, { animation: false });
	}

	openCustomBackdropClass(content: TemplateRef<any>) {
		this.offcanvasService.open(content, { backdropClass: 'bg-info' });
	}

	openCustomPanelClass(content: TemplateRef<any>) {
		this.offcanvasService.open(content, { panelClass: 'bg-info' });
	}

}
