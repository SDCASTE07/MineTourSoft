import { Injectable } from '@angular/core';
import {Observable} from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from 'environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ComponentsService {

  constructor(private readonly http:HttpClient){ }

  gurdarReserva(param : any): Observable<any> {
    const url =`${environment.url}/registro`;  
    return this.http.post(url, param) 
  }
  
  
  listar(): Observable<any> {
    const url =`${environment.url}/api/listar`;  
    return this.http.get(url) 
  }

  private createAuthorizationHeader() {
    const jwtToken = localStorage.getItem('JWT');
    if (jwtToken) {
      return new HttpHeaders().set(
        'Authorization', 'Bearer ' + jwtToken
      )
    } else {
      console.log("JWT token not found in the Local Storage");
    }
    return null;
  }

 
}
