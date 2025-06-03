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

        
        let asiento = '';
        for (let i = 0; i < this.cliente.asiento.length; i++) {
            asiento += this.cliente.asiento[i].Fila + this.cliente.asiento[i].numero;
            if (i < this.cliente.asiento.length - 1) {
                asiento += ', ';
            }
        }
        if (asiento === '') {
            asiento = 'No asignado';
        }
        console.log(`Asiento(s): ${asiento}`);

        console.log(`Fecha: ${this.fecha}`);

        
        let aperitivo = '';
        const aperitivos = this.sala.obtenerAperitivos();
        for (let i = 0; i < aperitivos.length; i++) {
            aperitivo += aperitivos[i].nombre;
            if (i < aperitivos.length - 1) {
                aperitivo += ', ';
            }
        }
        if (aperitivo == '') {
            aperitivo = 'Ninguno';
        }
        console.log(`Aperitivos gratuitos: ${aperitivo}`);

       
        let accesorio = '';
        const accesorios = this.sala.obtenerAccesorios();
        for (let i = 0; i < accesorios.length; i++) {
            accesorio += accesorios[i].nombre;
            if (i < accesorios.length - 1) {
                accesorio += ', ';
            }
        }
        if (accesorio === '') {
            accesorio = 'Ninguno';
        }
        console.log(`Accesorios gratuitos: ${accesorio}`);

        
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