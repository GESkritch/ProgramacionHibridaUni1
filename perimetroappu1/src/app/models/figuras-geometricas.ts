export abstract class FiguraGeometrica {
  constructor(public nombre: string) {}
  abstract calcularPerimetro(): number;
}

// Clase para el Circulo
export class Circulo extends FiguraGeometrica {
  constructor(public radio: number) {
    super("Circulo");
  }
  calcularPerimetro(): number {
    
    return 2 * Math.PI * this.radio;
  }
}

// Clase para Triangulo Equilatero
export class TrianguloEquilatero extends FiguraGeometrica {
  constructor(protected lado: number) {
    super("TrianguloEquilatero");
  }
  calcularPerimetro(): number {
    return 3 * this.lado;
  }
}

// Clase para Triangulo Escaleno
export class TrianguloEscaleno extends TrianguloEquilatero {
  private ladoA: number;
  private ladoB: number;
  private ladoC: number;

  constructor(ladoA: number, ladoB: number, ladoC: number) {
    super(ladoA);
    this.ladoA = ladoA;
    this.ladoB = ladoB;
    this.ladoC = ladoC;
  }
  override calcularPerimetro(): number {
    return this.ladoA + this.ladoB + this.ladoC;
  }
}