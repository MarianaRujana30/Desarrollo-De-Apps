import { Component } from '@angular/core';
import { CharacterListComponent } from './components/character-list/character-list.component';

@Component({
  selector: 'app-root',
  imports: [CharacterListComponent],
  template: `<app-character-list></app-character-list>`,
  styleUrl: './app.css',
})
export class App {}