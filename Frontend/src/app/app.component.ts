import { Component } from '@angular/core';
import { RouterModule, RouterOutlet } from '@angular/router';
import { ProductosComponent } from './components/productos/productos.component';
import { ProductoFormComponent } from './components/producto-form/producto-form.component';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, ProductosComponent, RouterModule, ProductoFormComponent, HeaderComponent, FooterComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'TPBackend-VegaFernando-LU5817-Frontend';
}
