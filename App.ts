import { Pelicula } from "./Pelicula";
import { Cliente } from "./Cliente";
import{ Sala } from "./sala";
import { Compra } from "./Compra";
import { Asiento } from "./Asiento";
import { Aperitivos } from "./Aperitivos";
import { Accesorio } from "./Accesorio";
import { Comestible } from "./Comestible";

const asiento1 = new Asiento(1, "A");
const asiento2 = new Asiento(2, "G");
const asiento3 = new Asiento(3, "B");

const aperitivo1 = new Aperitivos("Palomitas");
const aperitivo2 = new Aperitivos("Refresco");
const accesorio1 = new Accesorio("Cangilera tematica");
const accesorio2 = new Accesorio("Poster de la pelicula");
const comestible1 = new Comestible("Chocolatina",1.5);
const comestible2 = new Comestible("Galletas",1.0);

const sala1 = new Sala("Sala 1", 10);
const pelicula1 = new Pelicula("Avatar","Ciencia Ficción", "James Cameron","insert descripcion(no se)", 180, sala1);

pelicula1.AsignarSala(sala1);

const disponibles = pelicula1.sala.AsignarAsiento(asiento1);
const cliente1 = new Cliente("Juan");

const compra1 = new Compra(cliente1, pelicula1, sala1,"12/05/2025");

console.log(compra1.obtenerDetallesCompra());

