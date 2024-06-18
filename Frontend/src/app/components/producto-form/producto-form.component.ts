import { Component, ViewChild } from '@angular/core';
import { FormsModule, NgForm } from '@angular/forms';
import { ProductoService } from '../../services/producto.service';
import { Producto } from '../../models/producto';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-producto-form',
  standalone: true,
  imports: [FormsModule, RouterModule, CommonModule],
  templateUrl: './producto-form.component.html',
  styleUrl: './producto-form.component.css'
})
export class ProductoFormComponent {
  @ViewChild('productoForm') productoForm!: NgForm;
  
  producto: Producto = new Producto();
  destacado: boolean = false;

  constructor(private productoService: ProductoService){
    
  }

  agregarProducto(){
      this.productoService.postProducto(this.producto).subscribe(
        result => {
          console.log('Producto agregado exitosamente', result);
          this.limpiarProducto();
        },
        error => {
          console.error('Error al agregar producto', error);
        }
      );
  }
  limpiarProducto(){
    this.productoForm.resetForm();
    this.producto = new Producto();
  }

  onChange(event: Event) {
    this.destacado = (event.target as HTMLInputElement).checked;
    this.producto.destacado = this.destacado;
  }
}
