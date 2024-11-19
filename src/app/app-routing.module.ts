import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListaSeriesComponent } from './components/lista-series/lista-series.component';
import { DetalleSerieComponent } from './components/detalle-serie/detalle-serie.component';

const routes: Routes = [
  {path: '', redirectTo: '/listaPersonas', pathMatch: 'full'},
  {path: 'listaPersonas', component: ListaPersonasComponent},
  {path: 'detallePersona/:id', component: DetallePersonaComponent},
  {path: 'seriesPopulares', component: ListaSeriesComponent},
  {path: 'detalle-serie/:id', component: DetalleSerieComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
