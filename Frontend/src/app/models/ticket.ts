import { Espectador } from "./espectador";

export class Ticket {
    _id!: string;
    precioTicket!: number;
    categoriaEspectador: string;
    fechaCompra: string;
    espectador: Espectador;

    constructor(){
        this.categoriaEspectador = "";
        this.fechaCompra = "";
        this.espectador = new Espectador();
    }
}
