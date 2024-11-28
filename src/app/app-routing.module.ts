import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { MovieDetailComponent } from './components/movies/movie-detail/movie-detail.component';
import { MovieListComponent } from './components/movies/movie-list/movie-list.component';



import { ListaSeriesComponent } from './components/lista-series/lista-series.component';
import { DetalleSerieComponent } from './components/detalle-serie/detalle-serie.component';
import { DetallePersonaComponent } from './components/detalle-persona/detalle-persona.component';
import { ListaPersonasComponent } from './components/lista-personas/lista-personas.component';
import { HomeComponent } from './components/home/home.component';
import { ApprovedComponent } from './components/shared/approved/approved.component';
import { WatchListComponent } from './components/perfil/watch-list/watch-list.component';
import { SeriesFavoritasComponent } from './components/series-favoritas/series-favoritas.component';
import { PeliculasFavoritasComponent } from './components/peliculas-favoritas/peliculas-favoritas.component';


const routes: Routes = [
  {path: '', redirectTo: '/home', pathMatch: 'full'},
  {path: 'home', component: HomeComponent},
  {path: 'people', component: ListaPersonasComponent},
  {path: 'person/:id', component: DetallePersonaComponent},
  {path: 'approved', component: ApprovedComponent},
  {path: 'series', component: ListaSeriesComponent},
  {path: 'serie/:id', component: DetalleSerieComponent},
  {path: 'movies', component: MovieListComponent },
  {path: 'movie/:id', component: MovieDetailComponent },
  {path: 'watchlist', component:WatchListComponent},
  {path: 'seriesFavorites', component: SeriesFavoritasComponent},
  {path: 'peliculasFavorites', component: PeliculasFavoritasComponent}


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }


