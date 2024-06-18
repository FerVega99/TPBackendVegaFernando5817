import { Component } from '@angular/core';
import { TicketService } from '../../services/ticket.service';
import { Ticket } from '../../models/ticket';
import { CommonModule } from '@angular/common';
import { Router, RouterModule } from '@angular/router';
import { Espectador } from '../../models/espectador';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-ticket-list',
  standalone: true,
  imports: [CommonModule, RouterModule, FormsModule],
  templateUrl: './ticket-list.component.html',
  styleUrl: './ticket-list.component.css'
})
export class TicketListComponent {
  precioReal: number = 1000;
  precioCobrado: number = 0;
  valorSeleccionado: string = '';
  listadoTicket: Array<Ticket>;
  tipoSeleccionado: string = "";
  categoria: string = "";
  espectadores: Array<any> = [];
  ticketModificado: Ticket = new Ticket();
  idModificado: string = "";

  constructor(private serviceTicket: TicketService){
    this.listadoTicket = new Array<Ticket>();
    this.obtenerTickets();
    this.obtenerEspectadores();
  }
  obtenerTickets(){
    this.serviceTicket.getTickets().subscribe(
      result =>{
        console.log(result);
        let vticket: Ticket = new Ticket();
        result.forEach((element: any) => {
          Object.assign(vticket, element);
          this.listadoTicket.push(vticket);
          vticket = new Ticket();
        });
      })
  }
  eliminarTicket(_id: string) {
    this.serviceTicket.deleteTicket(_id).subscribe();
    this.cargarTickets();
  }

  obtenerTipoEspectador() {
    this.serviceTicket.getTicketsByEspectador(this.tipoSeleccionado).subscribe(
      data => {
        this.listadoTicket = data;
      });
  }

  obtenerEspectadores(){
    this.espectadores = new Array<Espectador>(); 
    this.serviceTicket.getEspectadores().subscribe(
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


  onSelectChange(event: Event): void {
    const target = event.target as HTMLSelectElement;
    this.tipoSeleccionado = target.value;
    if (this.tipoSeleccionado === "t"){
      this.cargarTickets();
    }
    else{
      this.obtenerTipoEspectador();
    }
    
  }
  cargarTickets(){
    this.serviceTicket.getTickets().subscribe(
      data => {
      this.listadoTicket = data;
    });
  }


  asignarId(idModificado:string){
    this.ticketModificado._id = idModificado;
  }
  modificarTicket() {
    this.serviceTicket.updateTicket(this.ticketModificado._id, this.ticketModificado).subscribe(
      data => {
        this.cargarTickets();
        this.limpiarTicket();
      },
      error => {
        console.error('Error al modificar ticket', error);
      }
    );
  }

  onChange(event: Event) {
    this.valorSeleccionado = (event.target as HTMLSelectElement).value;
      if(this.valorSeleccionado == 'e'){
        this.ticketModificado.precioTicket = this.precioReal;
        this.precioCobrado = this.ticketModificado.precioTicket;
      }
      else if (this.valorSeleccionado == 'l'){
        this.ticketModificado.precioTicket = this.precioReal - (this.precioReal * 0.2);
        this.precioCobrado = this.ticketModificado.precioTicket;
      }
    }

    limpiarTicket(){
      this.ticketModificado = new Ticket();
      this.precioCobrado = 0;
      this.valorSeleccionado = '';
      this.espectadores = new Array<Espectador>();
      this.obtenerEspectadores();
    }
}
