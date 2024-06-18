import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Producto } from '../models/producto';

@Injectable({
  providedIn: 'root'
})
export class ProductoService {

  constructor(private http: HttpClient) { }

  public getProductos(): Observable<any> {
    const httpOptions = {
      headers: new HttpHeaders({

      })
    }
    return this.http.get('http://localhost:3000/api/producto/true', httpOptions);
  }

  public postProducto(producto: Producto): Observable<any> {
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json'
      })
    }

    let body:any = JSON.stringify(producto);
    return this.http.post('http://localhost:3000/api/producto', body, httpOptions);

  }

}
