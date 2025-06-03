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
        var asientosStr = '';
        for (var i = 0; i < this.cliente.asiento.length; i++) {
            asientosStr += this.cliente.asiento[i].Fila + this.cliente.asiento[i].numero;
            if (i < this.cliente.asiento.length - 1) {
                asientosStr += ', ';
            }
        }
        if (asientosStr === '') {
            asientosStr = 'No asignado';
        }
        console.log("Asiento(s): ".concat(asientosStr));
        console.log("Fecha: ".concat(this.fecha));
        var aperitivosStr = '';
        var aperitivos = this.sala.obtenerAperitivos();
        for (var i = 0; i < aperitivos.length; i++) {
            aperitivosStr += aperitivos[i].nombre;
            if (i < aperitivos.length - 1) {
                aperitivosStr += ', ';
            }
        }
        if (aperitivosStr === '') {
            aperitivosStr = 'Ninguno';
        }
        console.log("Aperitivos gratuitos: ".concat(aperitivosStr));
        var accesoriosStr = '';
        var accesorios = this.sala.obtenerAccesorios();
        for (var i = 0; i < accesorios.length; i++) {
            accesoriosStr += accesorios[i].nombre;
            if (i < accesorios.length - 1) {
                accesoriosStr += ', ';
            }
        }
        if (accesoriosStr === '') {
            accesoriosStr = 'Ninguno';
        }
        console.log("Accesorios gratuitos: ".concat(accesoriosStr));
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
