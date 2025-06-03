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
    Compra.prototype.obtenerDetallesCompra = function () {
        return "Compra realizada por: ".concat(this.cliente.nombre, ", Pel\u00EDcula: ").concat(this.pelicula.titulo, ", Sala: ").concat(this.sala.numero, ", Fecha: ").concat(this.fecha);
    };
    return Compra;
}());
exports.Compra = Compra;
