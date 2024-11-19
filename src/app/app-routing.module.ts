import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { MovieDetailComponent } from './components/movies/movie-detail/movie-detail.component';
import { MovieListComponent } from './components/movies/movie-list/movie-list.component';



import { ListaSeriesComponent } from './components/lista-series/lista-series.component';
import { DetalleSerieComponent } from './components/detalle-serie/detalle-serie.component';

const routes: Routes = [
  {path: '', redirectTo: '/listaPersonas', pathMatch: 'full'},
  {path: 'listaPersonas', component: ListaPersonasComponent},
  {path: 'detallePersona/:id', component: DetallePersonaComponent},
  {path: 'seriesPopulares', component: ListaSeriesComponent},
  {path: 'detalle-serie/:id', component: DetalleSerieComponent},
  {path: 'movies', component: MovieListComponent },
  {path: 'movie/:id', component: MovieDetailComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }


