import { Component, signal } from '@angular/core';
import { Calculadora } from './calculadora/calculadora';

@Component({
  imports: [Calculadora],
  selector: 'app-root',
  styleUrl: './app.css',
  templateUrl: './app.html',
})
export class App {
  protected readonly title = signal('calculadora-angular');
}
