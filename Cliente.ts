import { Asiento } from "./Asiento";
import { Comestible } from "./Comestible";

export class Cliente {
    public nombre: string;
    public asiento: Asiento[];
    public comestibles: Comestible[];

    constructor(nombre: string) {
        this.nombre = nombre;
        this.asiento = [];
        this.comestibles = [];
    }

}