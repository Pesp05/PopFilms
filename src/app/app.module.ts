import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { MovieListComponent } from './components/movies/movie-list/movie-list.component';
import { MovieDetailComponent } from './components/movies/movie-detail/movie-detail.component';
import { NgbCollapseModule, NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import { ListaPersonasComponent } from './components/lista-personas/lista-personas.component';
import { provideHttpClient } from '@angular/common/http';
import { DetallePersonaComponent } from './components/detalle-persona/detalle-persona.component';
import { EdadActorPipe } from './pipes/edad-actor.pipe';
import { PosterPipe } from './pipes/poster.pipe';
import { FooterComponent } from './components/shared/footer/footer.component';
import { MatIcon } from '@angular/material/icon';
import { DetalleSerieComponent } from './components/series/detalle-serie/detalle-serie.component';
import {MatButtonModule} from '@angular/material/button';
import { ListaSeriesComponent } from './components/series/lista-series/lista-series.component';
import { HomeComponent } from './components/home/home.component';
import { NavbarComponent } from './components/shared/navbar/navbar.component';
import { FiltroPeliComponent } from './components/filtros/filtro-peli/filtro-peli.component';
import { FiltroSerieComponent } from './components/filtros/filtro-serie/filtro-serie.component';
import { SearchComponent } from './components/search/search.component';
import { ApprovedComponent } from './components/shared/approved/approved.component';
import { MatMenuModule } from '@angular/material/menu';
import { SeriesValoradaComponent } from './components/valorados/series/series.component';
import { PeliculasValoradasComponent } from './components/valorados/peliculas/peliculas.component';

import { WatchListComponent } from './components/perfil/watch-list/watch-list.component';

import { SeriesFavoritasComponent } from './components/series-favoritas/series-favoritas.component';
import { PeliculasFavoritasComponent } from './components/peliculas-favoritas/peliculas-favoritas.component';


@NgModule({
  declarations: [
    AppComponent,
    MovieListComponent,
    MovieDetailComponent,
    ListaPersonasComponent,
    DetallePersonaComponent,
    ListaSeriesComponent,
    DetalleSerieComponent,
    EdadActorPipe,
    PosterPipe,
    FooterComponent,
    HomeComponent,
    NavbarComponent,
    FiltroPeliComponent,
    FiltroSerieComponent,
    SearchComponent,
    ApprovedComponent,
    SeriesValoradaComponent,
    PeliculasValoradasComponent,
    SeriesFavoritasComponent,
    PeliculasFavoritasComponent,
    WatchListComponent
  ],
  
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    MatButtonModule,
    MatIcon,
    MatMenuModule,
    NgbCollapseModule
  ],
  
  providers: [provideHttpClient(), provideAnimationsAsync()],
  bootstrap: [AppComponent]
})
export class AppModule { }
