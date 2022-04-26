import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormBuilder, FormGroup, NgForm, Validators } from '@angular/forms';
import { Usuario } from 'src/app/model/usuario';

@Component({
  selector: 'app-registro',
  templateUrl: './registro.component.html',
  styleUrls: ['./registro.component.css']
})
export class RegistroComponent implements OnInit {

  //Objetos
  public usuario: Usuario = new Usuario();

  //Booleanas
  public validatePassword:boolean;
  public submitted=false;

  //Form
  public registroForm: FormGroup;


  constructor(private formBuilder: FormBuilder, private router:Router) {
    this.validatePassword=false;


    this.registroForm = this.formBuilder.group({
      name: ['', [Validators.required]],
      password: ['', Validators.required],
      contrasenarepe: ['', Validators.required],
      email:['', [Validators.required, Validators.email]]
    });


   }

  ngOnInit(): void {
    //console.log(this.registroForm.controls)
  }

  onSubmit():void{
    this.submitted=true

    if (this.registroForm.value.password != this.registroForm.value.contrasenarepe) {
        this.validatePassword=true;
    }else{
        this.validatePassword=false
    }

  }

  get f() {
    return this.registroForm.controls;
  }


}
