"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Sala = void 0;
var Sala = /** @class */ (function () {
    function Sala(nombre) {
        this.nombre = nombre;
        this.asientos = [];
        this.aperitivos = [];
        this.accesorios = [];
    }
    Sala.prototype.obtenerAsientos = function () {
        return this.asientos;
    };
    Sala.prototype.marcarOcupado = function (asiento) {
        asiento.capacidad = true;
    };
    Sala.prototype.AsignarAsiento = function (asiento) {
        this.asientos.push(asiento);
        this.marcarOcupado(asiento);
    };
    Sala.prototype.obtenerAperitivos = function () {
        return this.aperitivos;
    };
    Sala.prototype.AsignarAperitivo = function (aperitivo) {
        this.aperitivos.push(aperitivo);
    };
    Sala.prototype.obtenerAccesorios = function () {
        return this.accesorios;
    };
    Sala.prototype.AsignarAccesorio = function (accesorio) {
        this.accesorios.push(accesorio);
    };
    return Sala;
}());
exports.Sala = Sala;
