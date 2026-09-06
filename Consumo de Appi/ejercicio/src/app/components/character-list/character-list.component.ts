import { Component, OnInit, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { CharacterService } from '../../services/character.service';
import { Character } from '../../models/character.model';

@Component({
  selector: 'app-character-list',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './character-list.component.html',
  styleUrls: ['./character-list.component.css']
})
export class CharacterListComponent implements OnInit {
  private readonly characterService = inject(CharacterService);

  characters: Character[] = [];
  loading = true;
  errorMessage: string | null = null;

  currentPage = 1;
  totalPages = 1;
  hasNext = false;
  hasPrev = false;

  searchTerm = '';
  private searchTimeout?: ReturnType<typeof setTimeout>;

  eliminados = new Set<number>();

  ngOnInit(): void {
    this.fetchCharacters();
  }

  fetchCharacters(page: number = 1): void {
    this.loading = true;
    this.errorMessage = null;

    this.characterService.getCharacters(page, this.searchTerm).subscribe({
      next: (response) => {
        this.characters = response.results;
        this.currentPage = page;
        this.totalPages = response.info.pages;
        this.hasNext = !!response.info.next;
        this.hasPrev = !!response.info.prev;
        this.loading = false;
      },
      error: (err) => {
        console.error('Error al obtener personajes:', err);
        this.errorMessage = 'Hubo un error al cargar los personajes. Intenta de nuevo.';
        this.loading = false;
      }
    });
  }

  onSearchChange(): void {
    clearTimeout(this.searchTimeout);
    this.searchTimeout = setTimeout(() => this.fetchCharacters(1), 400);
  }

  clearSearch(): void {
    this.searchTerm = '';
    this.fetchCharacters(1);
  }

  goToPage(page: number): void {
    if (page < 1 || page > this.totalPages) return;
    this.fetchCharacters(page);
  }

  toggleEliminado(id: number): void {
    if (this.eliminados.has(id)) {
      this.eliminados.delete(id);
    } else {
      this.eliminados.add(id);
    }
  }

  isEliminado(id: number): boolean {
    return this.eliminados.has(id);
  }

  statusClass(status: string): string {
    const s = status.toLowerCase();
    if (s === 'alive') return 'alive';
    if (s === 'dead') return 'dead';
    return 'unknown';
  }
}