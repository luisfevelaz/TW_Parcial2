import { Component, OnInit } from '@angular/core';

import {FormBuilder, Validators} from '@angular/forms'

@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.component.html',
  styleUrls: ['./inicio.component.css']
})
export class InicioComponent implements OnInit {
  
  validField = /^[A-Za-z]+$/; // Sólo acepta letras

  today: Date = new Date();
  date: string = this.today.getDate()+' / '+(this.today.getMonth()+1)+' / '+this.today.getFullYear();
  formulario: boolean = false

  formMiembro = this.formB.group({
    newName: ['', [Validators.required, Validators.pattern(this.validField)]],
    lastName: ['', [Validators.required, Validators.pattern(this.validField)]],
    email: ['', [Validators.required, Validators.minLength(5)]]
  });
 

  constructor(private formB: FormBuilder) { 
    
  }

  ngOnInit(): void {
  }

  showForm(): void{
    this.formulario = true;
    console.log('en form');
    
  }

  isValidField(field: string): boolean{
    return(
      this.formMiembro.get(field).touched && !this.formMiembro.get(field).valid
    );

  }

};
