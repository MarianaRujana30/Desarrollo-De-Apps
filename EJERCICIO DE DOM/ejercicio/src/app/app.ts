import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {

  color = '#7c3aed';
  nombreColor = 'Morado';

  cambiarColor() {

    if (this.color === '#7c3aed') {
      this.color = '#06b6d4';
      this.nombreColor = 'Azul';

    } else if (this.color === '#06b6d4') {
      this.color = '#f59e0b';
      this.nombreColor = 'Amarillo';

    } else if (this.color === '#f59e0b') {
      this.color = '#ec4899';
      this.nombreColor = 'Rosa';

    } else {
      this.color = '#7c3aed';
      this.nombreColor = 'Morado';
    }

  }

}