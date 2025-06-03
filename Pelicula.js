"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Pelicula = void 0;
var Pelicula = /** @class */ (function () {
    function Pelicula(titulo, genero, director, descripcion, duracion, sala) {
        this.titulo = titulo;
        this.genero = genero;
        this.director = director;
        this.descripcion = descripcion;
        this.duracion = duracion;
        this.sala = sala;
    }
    Pelicula.prototype.AsignarSala = function (sala) {
        this.sala = sala;
    };
    Pelicula.prototype.obtenersala = function () {
        return this.sala;
    };
    return Pelicula;
}());
exports.Pelicula = Pelicula;
