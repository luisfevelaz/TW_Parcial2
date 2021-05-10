import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import {InicioComponent} from './components/inicio/inicio.component';
import {ClubesComponent} from './components/clubes/clubes.component';
import {JugadoresComponent} from './components/jugadores/jugadores.component';
const routes: Routes = [
  {path: 'inicio', component: InicioComponent},
  {path: 'clubes', component: ClubesComponent},
  {path: 'jugadores', component: JugadoresComponent},
  {path: '**', component: InicioComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
