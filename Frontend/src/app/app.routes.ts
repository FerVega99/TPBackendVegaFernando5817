import { Routes } from '@angular/router';
import { ProductosComponent } from './components/productos/productos.component';
import { ProductoFormComponent } from './components/producto-form/producto-form.component';
import { TicketFormComponent } from './components/ticket-form/ticket-form.component';
import { DivisasFormComponent } from './components/divisas-form/divisas-form.component';
import { DivisasListComponent } from './components/divisas-list/divisas-list.component';
import { TicketListComponent } from './components/ticket-list/ticket-list.component';

export const routes: Routes = [
    { path: 'punto1', component: ProductoFormComponent },
    { path: 'punto2', component: DivisasFormComponent},
    { path: 'punto3', component: TicketFormComponent},
    { path: 'punto1/productos-list', component: ProductosComponent },
    { path: 'punto2/divisas-list', component: DivisasListComponent},
    { path: 'punto3/tickets-list', component: TicketListComponent},
    { path: '**', pathMatch:'full',redirectTo:'punto1' }
];
