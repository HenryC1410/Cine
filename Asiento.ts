export class Asiento {
  public numero: number;
  public Fila: string;
  public capacidad: boolean;

  constructor(numero: number, fila: string) {
    this.numero = numero;
    this.Fila = fila;
    this.capacidad = false;
  } 

}