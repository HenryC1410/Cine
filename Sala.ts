import {Asiento} from './Asiento';
import { Aperitivos } from './Aperitivos';
import { Accesorio } from './Accesorio';

export class Sala{
    public nombre:string;
    public numero:number;
    public asientos: Asiento[];
    public aperitivos: Aperitivos[];
    public accesorios: Accesorio[];
    
    
    constructor(nombre: string, numero: number) {
        this.nombre = nombre;
        this.numero = numero;
        this.asientos = [];
        this.aperitivos = [];
        this.accesorios = [];
    }
    obtenerAsientos(): Asiento[] {
        return this.asientos;
    }

    marcarOcupado(asiento: Asiento): void {
        asiento.capacidad = true;
    }

    AsignarAsiento(asiento: Asiento): void {
        this.asientos.push(asiento);
        this.marcarOcupado(asiento);
    }
    
    obtenerAperitivos(): Aperitivos[] {
        return this.aperitivos;
    }
    AsignarAperitivo(aperitivo: Aperitivos): void {
        this.aperitivos.push(aperitivo);
    }
    obtenerAccesorios(): Accesorio[] {
        return this.accesorios;
    }
    AsignarAccesorio(accesorio: Accesorio): void {
        this.accesorios.push(accesorio);
    }

}