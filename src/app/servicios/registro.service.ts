import { DatosService } from './datos.service';
import { AppEndPoints } from './../endpoints.component';
import { Injectable } from "@angular/core";
import { HttpClient, HttpParams} from "@angular/common/http"




@Injectable({
  providedIn: 'root'
})

export class RegistroService{

  constructor(private http: HttpClient) {}

    registro(name:string, email:string, password:string){
      
      let endpoint=AppEndPoints.ENDPOINTREGISTRO//Usammos la API de registro

      let body = new HttpParams() //Usamos HttpParams y le mandamos los parametros del registro
      .set('name',name)
      .set('email',email)
      .set('password',password)

        return this.http.post(endpoint, body);
    }

}

