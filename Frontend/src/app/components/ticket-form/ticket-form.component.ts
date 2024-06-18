import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { Ticket } from '../../models/ticket';
import { TicketService } from '../../services/ticket.service';
import { Espectador } from '../../models/espectador';

@Component({
  selector: 'app-ticket-form',
  standalone: true,
  imports: [CommonModule, FormsModule, RouterModule],
  templateUrl: './ticket-form.component.html',
  styleUrl: './ticket-form.component.css'
})
export class TicketFormComponent {

  ticket: Ticket = new Ticket();
  precioReal: number = 1000;
  precioCobrado: number = 0;
  valorSeleccionado: string = '';
  espectadores: Array<any> = [];
  espectador: Espectador = new Espectador();

  constructor(private servicioTicket: TicketService){
    this.obtenerEspectadores()
  }
  agregarTicket(){
    this.ticket.precioTicket = this.precioCobrado;
    this.servicioTicket.postTicket(this.ticket).subscribe(
      data => {
        this.limpiarTicket();
      }
    )
  }

  obtenerEspectadores(){
    this.espectadores = new Array<Espectador>(); 
    this.servicioTicket.getEspectadores().subscribe(
      data =>{
        let vespectador: Espectador = new Espectador();
        Object.values(data).forEach((element:any) => {
          Object.assign(vespectador, element);
          this.espectadores.push(vespectador);
          vespectador = new Espectador();
        });
      },
      error =>{
        console.error('Error al obtener espectadores', error);
      }
      
    )
  }

  onChange(event: Event) {
    this.valorSeleccionado = (event.target as HTMLSelectElement).value;
      if(this.valorSeleccionado == 'e'){
        this.ticket.precioTicket = this.precioReal;
        this.precioCobrado = this.ticket.precioTicket;
      }
      else if (this.valorSeleccionado == 'l'){
        this.ticket.precioTicket = this.precioReal - (this.precioReal * 0.2);
        this.precioCobrado = this.ticket.precioTicket;
      }
    }

  limpiarTicket(){
    this.ticket = new Ticket();
    this.precioCobrado = 0;
    this.valorSeleccionado = '';
    this.espectador = new Espectador();
    this.espectadores = new Array<Espectador>();
    this.obtenerEspectadores();
  }

  }
