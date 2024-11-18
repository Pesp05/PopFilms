import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import { ListaPersonasComponent } from './components/lista-personas/lista-personas.component';
import { provideHttpClient } from '@angular/common/http';
import { DetallePersonaComponent } from './components/detalle-persona/detalle-persona.component';

@NgModule({
  declarations: [
    AppComponent,
    ListaPersonasComponent,
    DetallePersonaComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule
  ],
  providers: [
    provideAnimationsAsync(),
    provideHttpClient()
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
