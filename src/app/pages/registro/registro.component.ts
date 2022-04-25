import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Usuario } from 'src/app/model/usuario';

@Component({
  selector: 'app-registro',
  templateUrl: './registro.component.html',
  styleUrls: ['./registro.component.css']
})
export class RegistroComponent implements OnInit {

  public usuario: Usuario = new Usuario();
  public usuarioModel: Usuario = new Usuario();

  public validateName:boolean;
  public validatePassword:boolean;
  public validateEmail:boolean;

  public contrasenaRepetida:string;

  constructor() {
    this.validateName=false;
    this.validatePassword=false;
    this.validateEmail=false;

    this.contrasenaRepetida=""
   }

  ngOnInit(): void {
  }

  onSubmit(f: NgForm){

  }

  public recogerDatos(event:any):void{
		let valueInput:string=event.target.value;
		this.contrasenaRepetida=valueInput;
	}

}
