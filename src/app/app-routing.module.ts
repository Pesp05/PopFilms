import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { MovieDetailComponent } from './components/movies/movie-detail/movie-detail.component';
import { MovieListComponent } from './components/movies/movie-list/movie-list.component';



import { ListaSeriesComponent } from './components/lista-series/lista-series.component';
import { DetalleSerieComponent } from './components/detalle-serie/detalle-serie.component';
import { DetallePersonaComponent } from './components/detalle-persona/detalle-persona.component';
import { ListaPersonasComponent } from './components/lista-personas/lista-personas.component';
import { HomeComponent } from './components/home/home.component';

const routes: Routes = [
  {path: '', redirectTo: '/home', pathMatch: 'full'},
  {path: 'home', component: HomeComponent},
  {path: 'people', component: ListaPersonasComponent},
  {path: 'person/:id', component: DetallePersonaComponent},
  {path: 'series', component: ListaSeriesComponent},
  {path: 'serie/:id', component: DetalleSerieComponent},
  {path: 'movies', component: MovieListComponent },
  {path: 'movie/:id', component: MovieDetailComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }


