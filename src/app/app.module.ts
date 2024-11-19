import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import { ListaPersonasComponent } from './components/lista-personas/lista-personas.component';
import { provideHttpClient } from '@angular/common/http';
import { DetallePersonaComponent } from './components/detalle-persona/detalle-persona.component';
import { EdadActorPipe } from './pipes/edad-actor.pipe';
import { PosterPipe } from './pipes/poster.pipe';
import { FooterComponent } from './components/shared/footer/footer.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { MatIcon } from '@angular/material/icon';
import { DetalleSerieComponent } from './components/detalle-serie/detalle-serie.component';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import {MatButtonModule} from '@angular/material/button';
import { ListaSeriesComponent } from './components/lista-series/lista-series.component';

@NgModule({
  declarations: [
    AppComponent,
    ListaPersonasComponent,
    DetallePersonaComponent,
    ListaSeriesComponent,
    DetalleSerieComponent,
    EdadActorPipe,
    PosterPipe,
    FooterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    MatButtonModule,
    MatIcon
  ],
  providers: [provideHttpClient(), provideAnimationsAsync()],
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
