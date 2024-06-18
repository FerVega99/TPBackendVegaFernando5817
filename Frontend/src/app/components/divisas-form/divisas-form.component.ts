import { CommonModule } from '@angular/common';
import { Component, ViewChild } from '@angular/core';
import { RouterModule } from '@angular/router';
import { DivisasService } from '../../services/divisas.service';
import { FormsModule, NgForm } from '@angular/forms';
import { Transaccion } from '../../models/transaccion';

@Component({
  selector: 'app-divisas-form',
  standalone: true,
  imports: [RouterModule, CommonModule, FormsModule],
  templateUrl: './divisas-form.component.html',
  styleUrl: './divisas-form.component.css'
})
export class DivisasFormComponent {
  @ViewChild('divisasForm') divisasForm!: NgForm;
  
  divisas: Array<any> = [];
  transaccion: Transaccion = new Transaccion();
  transacciones: Array<Transaccion> = [];
  resultado!: number;

  constructor(private serviciDivisas: DivisasService){

  }

  obtenerDivisas() {
    this.serviciDivisas.getDivisas().subscribe(
      data => {
        this.divisas = Object.entries(data.result); 
      },
      error => {
        console.error('Error al obtener divisas', error);
      }
    );
  }


  realizarConversion(){
    this.serviciDivisas.getTransaccionConvertida(this.transaccion.monedaOrigen, this.transaccion.monedaDestino, this.transaccion.tasaConversion).subscribe(
        data => {
        this.resultado = data.result;
        this.transaccion.cantidadOrigen = data.meta.rates.from
        this.transaccion.cantidadDestino = data.meta.rates.to
        this.transaccion.monedaOrigen = this.transaccion.monedaOrigen.toUpperCase();
        this.transaccion.monedaDestino = this.transaccion.monedaDestino.toUpperCase();
        this.transacciones.push(this.transaccion);
        this.guardarTransaccion();
        this.limpiarTransaccion();
        },
        error => {
          console.error('Error al agregar producto', error);
        });
  }

  guardarTransaccion(){
    this.serviciDivisas.postTransaccion(this.transaccion).subscribe();
  }

  limpiarTransaccion(){
    this.divisasForm.resetForm();
    this.transaccion = new Transaccion();
  }
}

