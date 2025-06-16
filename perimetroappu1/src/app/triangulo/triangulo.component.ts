import { Component } from '@angular/core';
import { IonicModule } from '@ionic/angular';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { TrianguloEscaleno } from '../models/figuras-geometricas';

@Component({
  standalone: true,
  selector: 'app-triangulo',
  templateUrl: './triangulo.component.html',
  styleUrls: ['./triangulo.component.scss'],
  imports: [IonicModule, CommonModule, FormsModule]
})
export class TrianguloComponent {
  lado1: number = 0;
  lado2: number = 0;
  lado3: number = 0;
  resultado: number | null = null;

  calcular() {
    const triangulo = new TrianguloEscaleno(this.lado1, this.lado2, this.lado3);
    this.resultado = triangulo.calcularPerimetro();
  }
}