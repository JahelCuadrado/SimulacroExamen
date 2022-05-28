import { AppEndPoints } from './../endpoints.component';
import { Injectable } from "@angular/core";
import { HttpClient, HttpParams} from "@angular/common/http"




@Injectable({
  providedIn: 'root'
})

export class LoginService{

  constructor(private http: HttpClient) {}

    login(email:string, password:string){
      let endpoint=AppEndPoints.ENDPOINTLOGIN
      let body = new HttpParams()
      .set('email',email)
      .set('password',password)
        return this.http.post(endpoint, body);
    }



    }


