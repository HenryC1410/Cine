"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Compra = void 0;
var Compra = /** @class */ (function () {
    function Compra(cliente, pelicula, sala, fecha) {
        this.cliente = cliente;
        this.pelicula = pelicula;
        this.sala = sala;
        this.fecha = fecha;
    }
    Compra.prototype.imprimirResumenCompra = function () {
        console.log("----- RESUMEN DE COMPRA -----");
        console.log("Cliente: ".concat(this.cliente.nombre));
        console.log("Pel\u00EDcula: ".concat(this.pelicula.titulo));
        console.log("Sala: ".concat(this.sala.nombre));
        var asiento = '';
        for (var i = 0; i < this.cliente.asiento.length; i++) {
            asiento += this.cliente.asiento[i].Fila + this.cliente.asiento[i].numero;
            if (i < this.cliente.asiento.length - 1) {
                asiento += ', ';
            }
        }
        if (asiento === '') {
            asiento = 'No asignado';
        }
        console.log("Asiento(s): ".concat(asiento));
        console.log("Fecha: ".concat(this.fecha));
        var aperitivo = '';
        var aperitivos = this.sala.obtenerAperitivos();
        for (var i = 0; i < aperitivos.length; i++) {
            aperitivo += aperitivos[i].nombre;
            if (i < aperitivos.length - 1) {
                aperitivo += ', ';
            }
        }
        if (aperitivo == '') {
            aperitivo = 'Ninguno';
        }
        console.log("Aperitivos gratuitos: ".concat(aperitivo));
        var accesorio = '';
        var accesorios = this.sala.obtenerAccesorios();
        for (var i = 0; i < accesorios.length; i++) {
            accesorio += accesorios[i].nombre;
            if (i < accesorios.length - 1) {
                accesorio += ', ';
            }
        }
        if (accesorio === '') {
            accesorio = 'Ninguno';
        }
        console.log("Accesorios gratuitos: ".concat(accesorio));
        var consumidosStr = '';
        for (var i = 0; i < this.cliente.comestibles.length; i++) {
            consumidosStr += this.cliente.comestibles[i].nombre;
            if (i < this.cliente.comestibles.length - 1) {
                consumidosStr += ', ';
            }
        }
        if (consumidosStr === '') {
            consumidosStr = 'Ninguno';
        }
        console.log("Productos consumidos: ".concat(consumidosStr));
        console.log("-----------------------------");
    };
    return Compra;
}());
exports.Compra = Compra;
