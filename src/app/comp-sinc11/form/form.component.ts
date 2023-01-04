import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss']
})
export class FormComponent implements OnInit {

  public formulario!:FormGroup;

  constructor( private formBuilder:FormBuilder) { }
    boton=false;
    mensajeFinal=false;
  ngOnInit(): void {
    this.formulario=this.formBuilder.group({
      name:[' ',
      [
        Validators.required,
        Validators.minLength(10)
      ]
    ],
      email:['',
      [
        Validators.required,
        Validators.email
      ]
    ],
      mensaje:['',
      [
        Validators.required,
        Validators.maxLength(500)
      ]
    ]
    })

  }
  mostrar(){
    let validarName=this.formulario.get('name')?.valid
    let validarEmail=this.formulario.get('email')?.valid
    let validarMessage=this.formulario.get('mensaje')?.valid
    if(validarName && validarEmail && validarMessage){
      this.boton=false;
      this.mensajeFinal=true;
    }else{
      this.boton=true;
      this.mensajeFinal=false;
    }
  }
}
