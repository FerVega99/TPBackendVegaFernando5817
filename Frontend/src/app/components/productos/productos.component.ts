import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ProductoService } from '../../services/producto.service';
import { Producto } from '../../models/producto';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-productos',
  standalone: true,
  imports: [CommonModule, FormsModule, RouterModule],
  templateUrl: './productos.component.html',
  styleUrl: './productos.component.css'
})
export class ProductosComponent {

  productos: Array<Producto> = [];
  constructor(private productoService: ProductoService){
    this.cargarProductos();
  }

  cargarProductos(){
    this.productoService.getProductos().subscribe(
      result => {
        this.productos = result
        console.log(result);
      })
  }
}

