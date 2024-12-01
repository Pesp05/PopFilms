import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { MovieDetailComponent } from './components/movies/movie-detail/movie-detail.component';
import { MovieListComponent } from './components/movies/movie-list/movie-list.component';
import { DetalleSerieComponent } from './components/series/detalle-serie/detalle-serie.component';
import { DetallePersonaComponent } from './components/detalle-persona/detalle-persona.component';
import { ListaPersonasComponent } from './components/lista-personas/lista-personas.component';
import { HomeComponent } from './components/home/home.component';
import { ApprovedComponent } from './components/shared/approved/approved.component';
import { SeriesValoradaComponent } from './components/valorados/series/series.component';
import { PeliculasValoradasComponent } from './components/valorados/peliculas/peliculas.component';
import { ListaSeriesComponent } from './components/series/lista-series/lista-series.component';
import { WatchListComponent } from './components/perfil/watch-list/watch-list.component';
import { SeriesFavoritasComponent } from './components/series-favoritas/series-favoritas.component';
import { PeliculasFavoritasComponent } from './components/peliculas-favoritas/peliculas-favoritas.component';
import { FormCrearListaComponent } from './components/form-crear-lista/form-crear-lista.component';
import { ListasCreadasComponent } from './components/listas-creadas/listas-creadas.component';
import { DetalleListaCreadaComponent } from './components/detalle-lista-creada/detalle-lista-creada.component';


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
  {path: 'seriesRated', component: SeriesValoradaComponent},
  {path: 'moviesRated', component: PeliculasValoradasComponent},
  {path: 'watchlist', component:WatchListComponent},
  {path: 'seriesFavorites', component: SeriesFavoritasComponent},
  {path: 'peliculasFavorites', component: PeliculasFavoritasComponent},
  {path: 'createList', component: FormCrearListaComponent},
  {path: 'createdLists', component: ListasCreadasComponent},
  {path: 'listDetail/:id', component: DetalleListaCreadaComponent}


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }


