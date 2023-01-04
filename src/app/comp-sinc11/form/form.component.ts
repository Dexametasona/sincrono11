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
    if(validarName){
      this.boton=false
    }else{
      this.boton=true
    }
  }
}
