import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListaSeriesComponent } from './components/lista-series/lista-series.component';
import { DetalleSerieComponent } from './components/detalle-serie/detalle-serie.component';

const routes: Routes = [
  {path: 'seriesPopulares', component: ListaSeriesComponent},
  {path: 'detalle-serie/:id', component: DetalleSerieComponent},
 /* {path: '', redirectTo: '/seriesPopulares', pathMatch: 'full'}*/
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
