import { Sala } from "./sala";

export class Pelicula {
    public titulo: string;
    public genero: string;
    public director: string;
    public descripcion: string;
    public duracion: number; 
    public sala: Sala;

    constructor(titulo: string, genero: string, director: string, descripcion: string, duracion: number, sala: Sala) {
        this.titulo = titulo;
        this.genero = genero;
        this.director = director;
        this.descripcion = descripcion;
        this.duracion = duracion;
        this.sala = sala;
    }
}