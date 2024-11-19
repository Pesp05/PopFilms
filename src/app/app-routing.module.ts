import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListaPersonasComponent } from './components/lista-personas/lista-personas.component';
import { DetallePersonaComponent } from './components/detalle-persona/detalle-persona.component';

const routes: Routes = [
  {path: '', redirectTo: '/listaPersonas', pathMatch: 'full'},
  {path: 'listaPersonas', component: ListaPersonasComponent},
  {path: 'detallePersona/:id', component: DetallePersonaComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
