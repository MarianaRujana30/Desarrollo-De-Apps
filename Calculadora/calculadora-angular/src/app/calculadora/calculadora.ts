import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-calculadora',
  standalone: true,
  imports: [FormsModule, CommonModule],
  templateUrl: './calculadora.html',
  styleUrl: './calculadora.css'
})
export class Calculadora {
  numero1: number | null = null;
  numero2: number | null = null;
  operacion: string = '+';
  resultado: number | null = null;

  calcular() {
    if (this.numero1 === null || this.numero2 === null) {
      this.resultado = null;
      return;
    }

    switch (this.operacion) {
      case '+':
        this.resultado = this.numero1 + this.numero2;
        break;
      case '-':
        this.resultado = this.numero1 - this.numero2;
        break;
      case '*':
        this.resultado = this.numero1 * this.numero2;
        break;
      case '/':
        this.resultado = this.numero2 !== 0 ? this.numero1 / this.numero2 : NaN;
        break;
    }
  }

  eliminar() {
    this.numero1 = null;
    this.numero2 = null;
    this.operacion = '+';
    this.resultado = null;
  }
}