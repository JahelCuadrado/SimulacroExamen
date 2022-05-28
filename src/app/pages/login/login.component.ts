import { DatosService } from './../../servicios/datos.service';
import { Usuario } from 'src/app/model/usuario';
import { LoginService } from './../../servicios/login.service';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

    //Objeto
    public loginUser = new Usuario();

    //Form
    public registroForm: FormGroup;

    //Boleana
    public submitted:Boolean = false;
    public usuarioIncorrecto:Boolean=false;

  constructor(private router:Router, private formBuilder: FormBuilder, private loginService: LoginService, private datosService:DatosService) {

    this.registroForm = this.formBuilder.group({
      password: ['', Validators.required],
      email:['', [Validators.required, Validators.email]]
    });

  }

  ngOnInit(): void {
  }

  onSubmit(){
    this.submitted=true

    if (this.registroForm.valid) {

      this.loginService.login(
        this.registroForm.value.email,
        this.registroForm.value.password
      ).subscribe(login => {

        this.loginUser = this.datosService.datosUsuarioConectado();

        if(this.loginUser.password==this.registroForm.value.password){

          console.log('Inicio sesion ' + JSON.stringify(login));
          this.router.navigate(['/home']);

        }else{
          this.usuarioIncorrecto=true
        }



      },(error:any) => {
        this.usuarioIncorrecto=true
      });

    }
  }



  public goToRegistro(): void{
    this.router.navigate(['/registro']);
  }

  get f(){
    return this.registroForm.controls;
  }

}
