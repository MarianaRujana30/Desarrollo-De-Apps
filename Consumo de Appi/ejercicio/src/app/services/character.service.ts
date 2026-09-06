import { Injectable, inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { CharacterResponse } from '../models/character.model';

@Injectable({ providedIn: 'root' })
export class CharacterService {
  private readonly http = inject(HttpClient);
  private readonly apiUrl = 'https://rickandmortyapi.com/api/character';

  getCharacters(page: number = 1, name: string = ''): Observable<CharacterResponse> {
    const params = new URLSearchParams({ page: page.toString() });
    if (name.trim()) {
      params.set('name', name.trim());
    }
    return this.http.get<CharacterResponse>(`${this.apiUrl}?${params.toString()}`);
  }
}