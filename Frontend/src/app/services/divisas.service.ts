import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Transaccion } from '../models/transaccion';

@Injectable({
  providedIn: 'root'
})
export class DivisasService {

  constructor(private http: HttpClient) { }

  public getTransaccionConvertida(from: string, to: string, amount: number): Observable<any>{
    const httpOptions = {
      headers: new HttpHeaders({
        'x-rapidapi-key': '3aa9575b96msh9be0aab6c20411fp1ab5b2jsn9e7b69b10860',
		    'x-rapidapi-host': 'currency-converter-pro1.p.rapidapi.com'
      }),
    }
    return this.http.get("https://currency-converter-pro1.p.rapidapi.com/convert?from=" + from + "&to=" + to + "&amount=" + amount, httpOptions);
  }

  public getDivisas(): Observable<any> {
    const httpOptions = {
      headers: new HttpHeaders({
      'x-rapidapi-key': '464cbdd516msh188ba69cecd6233p1f9d05jsnac4f9d82c946',
		  'x-rapidapi-host': 'currency-converter-pro1.p.rapidapi.com'
      }),
    }
      return this.http.get("https://currency-converter-pro1.p.rapidapi.com/currencies", httpOptions);
  }

  public getTransacciones(): Observable<any> {
    const httpOptions = {
      headers: new HttpHeaders({

      })
    }
    return this.http.get('http://localhost:3000/api/transaccion/', httpOptions);
  }

  public getTransaccionesByDivisa(origen:string, destino:string): Observable<any> {
    const httpOptions = {
      headers: new HttpHeaders({

      })
    }
    return this.http.get('http://localhost:3000/api/transaccion/' + origen + '/' + destino, httpOptions);
  }

  public postTransaccion(transaccion: Transaccion): Observable<any> {
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json'
      })
    }
    let body = JSON.stringify(transaccion)
    return this.http.post('http://localhost:3000/api/transaccion/', body, httpOptions);
  }
}
