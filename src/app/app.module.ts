import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { InicioComponent } from './components/inicio/inicio.component';
import { ClubesComponent } from './components/clubes/clubes.component';
import { JugadoresComponent } from './components/jugadores/jugadores.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { PipeEnlacesPipe } from './pipes/pipe-enlaces.pipe';

@NgModule({
  declarations: [
    AppComponent,
    InicioComponent,
    ClubesComponent,
    JugadoresComponent,
    PipeEnlacesPipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
