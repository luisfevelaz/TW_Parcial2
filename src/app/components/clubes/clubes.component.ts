import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-clubes',
  templateUrl: './clubes.component.html',
  styleUrls: ['./clubes.component.css']
})
export class ClubesComponent implements OnInit {

  busqueda: string = "";

  chivas: boolean = false;
  ame: boolean = false;
  pumas: boolean = false;
  azul: boolean = false;
  ninguno: boolean = false;

  constructor() { }

  ngOnInit(): void {
  }

  Buscar(){
    if(this.busqueda === ""){
      return;
    }
    this.busqueda = this.busqueda.toLocaleLowerCase();
    
    switch(this.busqueda){
      case 'chivas':
        this.chivas = true;
        this.ame = false;
        this.azul = false;
        this.pumas = false;
        this.ninguno = false;
        break;
      case 'america':
        this.chivas = false;
        this.ame = true;
        this.azul = false;
        this.pumas = false;
        this.ninguno = false;
        break;
      case 'cruz azul':
        this.chivas = false;
        this.ame = false;
        this.azul = true;
        this.pumas = false;
        this.ninguno = false;
        break;
      case 'pumas':
        this.chivas = false;
        this.ame = false;
        this.azul = false;
        this.pumas = true;
        this.ninguno = false;
        break;
      default: 
      this.chivas = false;
      this.ame = false;
      this.azul = false;
      this.pumas = false;
      this.ninguno = true;
    }
  }

}
