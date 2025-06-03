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

    imprimirResumenCompra(): void {
        console.log("----- RESUMEN DE COMPRA -----");
        console.log(`Cliente: ${this.cliente.nombre}`);
        console.log(`Película: ${this.pelicula.titulo}`);
        console.log(`Sala: ${this.sala.nombre}`);

        
        let asientosStr = '';
        for (let i = 0; i < this.cliente.asiento.length; i++) {
            asientosStr += this.cliente.asiento[i].Fila + this.cliente.asiento[i].numero;
            if (i < this.cliente.asiento.length - 1) {
                asientosStr += ', ';
            }
        }
        if (asientosStr === '') {
            asientosStr = 'No asignado';
        }
        console.log(`Asiento(s): ${asientosStr}`);

        console.log(`Fecha: ${this.fecha}`);

        
        let aperitivosStr = '';
        const aperitivos = this.sala.obtenerAperitivos();
        for (let i = 0; i < aperitivos.length; i++) {
            aperitivosStr += aperitivos[i].nombre;
            if (i < aperitivos.length - 1) {
                aperitivosStr += ', ';
            }
        }
        if (aperitivosStr === '') {
            aperitivosStr = 'Ninguno';
        }
        console.log(`Aperitivos gratuitos: ${aperitivosStr}`);

       
        let accesoriosStr = '';
        const accesorios = this.sala.obtenerAccesorios();
        for (let i = 0; i < accesorios.length; i++) {
            accesoriosStr += accesorios[i].nombre;
            if (i < accesorios.length - 1) {
                accesoriosStr += ', ';
            }
        }
        if (accesoriosStr === '') {
            accesoriosStr = 'Ninguno';
        }
        console.log(`Accesorios gratuitos: ${accesoriosStr}`);

        
        let consumidosStr = '';
        for (let i = 0; i < this.cliente.comestibles.length; i++) {
            consumidosStr += this.cliente.comestibles[i].nombre;
            if (i < this.cliente.comestibles.length - 1) {
                consumidosStr += ', ';
            }
        }
        if (consumidosStr === '') {
            consumidosStr = 'Ninguno';
        }
        console.log(`Productos consumidos: ${consumidosStr}`);
        console.log("-----------------------------");
    }
}