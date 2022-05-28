import { Usuario } from 'src/app/model/usuario';
import { AppEndPoints } from './../endpoints.component';
import { Injectable } from "@angular/core";
import { HttpClient, HttpParams} from "@angular/common/http"




@Injectable({
  providedIn: 'root'
})

export class DatosService{

  public usuarioConectado = new Usuario();

  constructor() {

  }

      introducirDatos(name:string,email:string,password:string){
          this.usuarioConectado.name=name;
          this.usuarioConectado.email=email;
          this.usuarioConectado.password=password;

          //localStorage.setItem('login', JSON.stringify(this.usuarioConectado));
      }


      datosUsuarioConectado(){
          return this.usuarioConectado;
      }


    }
