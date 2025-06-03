import { Pelicula } from "./Pelicula";
import { Cliente } from "./Cliente";
import { Sala } from "./sala";
import { Compra } from "./Compra";
import { Asiento } from "./Asiento";
import { Aperitivos } from "./Aperitivos";
import { Accesorio } from "./Accesorio";
import { Comestible } from "./Comestible";

const asiento1 = new Asiento(1, "A");
const aperitivo1 = new Aperitivos("Chocolate");
const aperitivo2 = new Aperitivos("Galleta");
const accesorio1 = new Accesorio("Cangilera temática");
const accesorio2 = new Accesorio("Poster de la película");
const comestible1 = new Comestible("Palomitas", 1.5);
const comestible2 = new Comestible("CocaCola", 1.0);
const sala1 = new Sala("Sala 1");
sala1.AsignarAperitivo(aperitivo1);
sala1.AsignarAperitivo(aperitivo2);
sala1.AsignarAccesorio(accesorio1);
sala1.AsignarAccesorio(accesorio2);
const pelicula1 = new Pelicula("Avatar", "Ciencia Ficción", "James Cameron", "insert descripcion(no se)", 180, sala1);
sala1.AsignarAsiento(asiento1);
const cliente1 = new Cliente("Juan");
cliente1.asiento.push(asiento1);
cliente1.comestibles.push(comestible1, comestible2);
const compra1 = new Compra(cliente1, pelicula1, sala1, "12/05/2025");

compra1.imprimirResumenCompra();


// Crear nueva compra 
const aperitivo3 = new Aperitivos("Papas");
const aperitivo4 = new Aperitivos("Jugo");
const accesorio3 = new Accesorio("Sable láser miniatura");
const accesorio4 = new Accesorio("Póster edición limitada");
const sala2 = new Sala("Sala 2");
sala2.AsignarAperitivo(aperitivo3);
sala2.AsignarAperitivo(aperitivo4);
sala2.AsignarAccesorio(accesorio3);
sala2.AsignarAccesorio(accesorio4);
const pelicula2 = new Pelicula(
  "Star Wars: Episodio III - La venganza de los Sith",
  "Ciencia Ficción / Aventura",
  "George Lucas",
  "Anakin Skywalker se convierte en Darth Vader en medio del colapso de la República.",
  140,
  sala2
);
const asiento5 = new Asiento(5, "D");
sala2.AsignarAsiento(asiento5);
const cliente2 = new Cliente("Laura");
cliente2.asiento.push(asiento5);
const comestible5 = new Comestible("HotDog", 2.0);
const comestible6 = new Comestible("Botella de Agua", 1.5);
cliente2.comestibles.push(comestible5, comestible6);
const compra2 = new Compra(cliente2, pelicula2, sala2, "13/05/2025");

compra2.imprimirResumenCompra();

