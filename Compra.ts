import { Sala } from './sala';
import { Cliente } from './Cliente';
import { Pelicula } from './Pelicula';

export class Compra {
    public cliente: Cliente;
    public pelicula: Pelicula;
    public sala: Sala;
    public fecha: string;

    constructor(cliente: Cliente, pelicula: Pelicula, sala: Sala, fecha: string) {
        this.cliente = cliente;
        this.pelicula = pelicula;
        this.sala = sala;
        this.fecha = fecha;
    }
    obtenerDetallesCompra(): string {
        return `Compra realizada por: ${this.cliente.nombre}, Película: ${this.pelicula.titulo}, Sala: ${this.sala.numero}, Fecha: ${this.fecha}`;
    } 
}