import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Ticket } from '../models/ticket';

@Injectable({
  providedIn: 'root'
})
export class TicketService {

  constructor(private http: HttpClient) { }

  public getTickets(): Observable<any> {
    const httpOptions = {
      headers: new HttpHeaders({

      })
    }
    return this.http.get('http://localhost:3000/api/ticket/', httpOptions);
  }

  public getEspectadores(){
    const httpOptions = {
      headers: new HttpHeaders({

      })
    }
    return this.http.get('http://localhost:3000/api/espectador/', httpOptions);
  }

  public getEspectador(_id: string){
    const httpOptions = {
      headers: new HttpHeaders({

      })
    }
    return this.http.get('http://localhost:3000/api/espectador/' + _id, httpOptions);
  }

  public postTicket(ticket: Ticket): Observable<any> {
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json'
      })
    }

    let body:any = JSON.stringify(ticket);
    return this.http.post('http://localhost:3000/api/ticket/', body, httpOptions);

  }

  public deleteTicket(_id: string): Observable<any> {
    const httpOptions = {
      headers: new HttpHeaders({

      })
    }
    return this.http.delete('http://localhost:3000/api/ticket/' + _id, httpOptions);
  }

  public getTicketsByEspectador(categoria: string): Observable<any> {
    const httpOptions = {
      headers: new HttpHeaders({

      })
    }
    return this.http.get('http://localhost:3000/api/ticket/' + categoria, httpOptions);
  }

  public updateTicket(_id: string, ticket: Ticket): Observable<any> {
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json'
      })
    }

    let body:any = JSON.stringify(ticket);
    return this.http.put('http://localhost:3000/api/ticket/' + _id, body, httpOptions);

  }

  
}
