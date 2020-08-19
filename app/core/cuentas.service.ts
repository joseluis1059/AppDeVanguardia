import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Cuenta } from './../shared/cuenta';
import { Resumen } from './../shared/resumen';
import { catchError } from 'rxjs/operators';
@Injectable({
  providedIn: 'root'
})
export class CuentasService {

  // baseUrl : string = "https://localhost:44365/api/cuentas";
  // constructor(private httpClient : HttpClient) { }

  // getCuentas(): Observable<Cuenta[]>{
  
  //   return this.httpClient.get<Cuenta[]>(this.baseUrl)
  //   .pipe(
  //     catchError(this.handleError)
  //   );
  // }
  // getResumen(id:number): Observable<Resumen>{
  
  //   return this.httpClient.get<Resumen>(`${this.baseUrl}/resumen/${id}`)
  //   .pipe(
  //     catchError(this.handleError)
  //   );
  // }
  // private handleError(error : any){
  //   console.error('server error:', error);
  //   if(error.error instanceof Error){
  //     const errorMessage = error.error.message;
  //     return Observable.throw(errorMessage);
  //   }

  //   return Observable.throw(error || 'Server error');
  // }
}
