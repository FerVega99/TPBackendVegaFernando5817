import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { DivisasService } from '../../services/divisas.service';

@Component({
  selector: 'app-divisas-list',
  standalone: true,
  imports: [FormsModule, CommonModule],
  templateUrl: './divisas-list.component.html',
  styleUrl: './divisas-list.component.css'
})
export class DivisasListComponent {
  valorSeleccionado: string = '';
  divisas: Array<any> = [];
  filtroOrigen: string = '';
  filtroDestino: string = '';

  constructor(private serviciDivisas: DivisasService){
    this.cargarTransacciones()
  }

  cargarTransacciones(){
    this.serviciDivisas.getTransacciones().subscribe(
      data =>{
        this.divisas = data;
        console.log(this.divisas);
      }
      ) 
  }

  filtrarTransacciones(){
    if(this.valorSeleccionado === '2'){
      this.filtroOrigen = this.filtroOrigen.toUpperCase();
      this.filtroDestino = this.filtroDestino.toUpperCase();
      this.serviciDivisas.getTransaccionesByDivisa(this.filtroOrigen, this.filtroDestino).subscribe(
        data =>{
          this.divisas = data;
        }
      )
    }
    else if(this.valorSeleccionado === '1'){
      this.serviciDivisas.getTransacciones().subscribe(
        data =>{
          this.divisas = data;
        }
        ) 
    }
  }




  onSelectChange(event: Event): void {
    const target = event.target as HTMLSelectElement;
    this.valorSeleccionado = target.value;
  }
}
