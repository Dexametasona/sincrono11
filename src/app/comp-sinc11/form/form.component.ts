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
        Validators.required
      ]
    ]
    })

  }
  mostrar(){

  }
}
