import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { environment } from 'src/environments/environment';
import { catchError } from 'rxjs/operators';
import { Pokemon } from '../models/pokemon';
import { PokemonId } from '../models/pokemonId';

@Injectable({
  providedIn: 'root'
})
export class PokemonService {
  pokeApi: any;

  constructor(private http: HttpClient) {
    this.pokeApi = environment.pokemonUrl;
   }

   getPokemon(): Observable<Pokemon[]> {
     return this.http.get<Pokemon[]>(`${this.pokeApi}`)
     .pipe(
      catchError(this.handleError)
     );
   }

   getPokemonId(id): Observable<PokemonId> {
    return this.http.get<PokemonId>(`${this.pokeApi}/${id}`)
    .pipe(
      catchError(this.handleError)
    );
   }

   private handleError(error: HttpErrorResponse) {
    if (error.error instanceof ErrorEvent) {
      console.error('An error occurred:', error.error.message);
    } else {
      console.error(
        `Backend returned code ${error.status}, ` +
        `body was: ${error.error}`);
    }
    return throwError(
      'Something bad happened; please try again later.');
  }
}
