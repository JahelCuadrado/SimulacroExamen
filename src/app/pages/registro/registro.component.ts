import { DatosService } from './../../servicios/datos.service';
import { RegistroService } from './../../servicios/registro.service';
import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Usuario } from 'src/app/model/usuario';

@Component({
  selector: 'app-registro',
  templateUrl: './registro.component.html',
  styleUrls: ['./registro.component.css']
})
export class RegistroComponent implements OnInit {

  //Booleanas
  public validatePassword:boolean;
  public submitted=false;
  public error = false

  //Form
  public registroForm: FormGroup;


  constructor(private formBuilder: FormBuilder, private router:Router, private registroService:RegistroService , private datosService:DatosService) {
    this.validatePassword=false;


    this.registroForm = this.formBuilder.group({
      name: ['', [Validators.required]],
      password: ['', Validators.required],
      contrasenarepe: ['', Validators.required],
      email:['', [Validators.required, Validators.email]],
      condiciones:[false, [Validators.required]]
    });


   }

  ngOnInit(): void {
   //console.log(this.registroForm.controls)
  }

  onSubmit():void{
    this.submitted=true
    this.error=true


    if(this.registroForm.value.password != this.registroForm.value.contrasenarepe){
        this.validatePassword=true
        return
    }


    if(this.registroForm.invalid){
      return
    }

        this.registroService.registro(
          this.registroForm.value.name,
          this.registroForm.value.email,
          this.registroForm.value.password

        ).subscribe(login => {

          this.datosService.introducirDatos(
            this.registroForm.value.name,
            this.registroForm.value.email,
            this.registroForm.value.password
          );

          console.log('Inicio sesion ' + JSON.stringify(login));

          this.router.navigate(['/login']);

        });




  }

  get f() {
    return this.registroForm.controls;
  }


}
