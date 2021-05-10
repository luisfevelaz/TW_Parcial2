import { Component, OnInit } from '@angular/core';
import {PipeEnlacesPipe} from '../../pipes/pipe-enlaces.pipe'

@Component({
  selector: 'app-jugadores',
  templateUrl: './jugadores.component.html',
  styleUrls: ['./jugadores.component.css']
})
export class JugadoresComponent implements OnInit {

  est = [false,false,false,false,false,false];

  jugadores =[
    {
      nombre: "Alexis Vega",
      imagen: 0,
      equipo: 'Chivas',
      edad: '23',
      numero: '7',
      goles: '8',
      partidos: '20'
    }, 
    {
      nombre: "Sebastián Córdova",
      imagen: 1,
      equipo: 'América',
      edad: '23',
      numero:'17',
      goles: '10',
      partidos: '20'
    },
    {
      nombre: "André-Pierre Gignac",
      imagen: 2,
      equipo: 'Tigres',
      edad:'35',
      numero: '10',
      goles: '15',
      partidos: '20'
    },
    {
      nombre: "Jonathan Rodríguez",
      imagen: 3,
      equipo: 'Cruz Azul',
      edad: '27',
      numero: '21',
      goles: '12',
      partidos: '20'
    },
    {
      nombre: "Juan Dineno",
      imagen: 4,
      equipo: 'Pumas',
      edad: '26',
      numero: '9',
      goles: '11',
      partidos: '20'
    },
    {
      nombre: "Rogelio Funes Mori",
      imagen: 5,
      equipo: 'Monterrey',
      edad: '30',
      numero: '7',
      goles: '13',
      partidos: '20'
    }];

  constructor() { }

  ngOnInit(): void {
  }

  showEst(index){
    switch(index){
      case 0:
      this.est[0] = !this.est[0];
      break;
      case 1:
      this.est[1] = !this.est[1];
      break;
      case 2:
      this.est[2] = !this.est[2];
      break;
      case 3:
      this.est[3] = !this.est[3];
      break;
      case 4:
      this.est[4] = !this.est[4];
      break;
      case 5:
      this.est[5] = !this.est[0];
      break;
    }
  }

}
