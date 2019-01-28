import { Component, OnInit } from '@angular/core';
import { PokemonService } from '../shared/service/pokemon.service';
import { Pokemon } from '../shared/models/pokemon';

@Component({
  selector: 'app-pokemon',
  templateUrl: './pokemon.component.html',
  styleUrls: ['./pokemon.component.scss']
})
export class PokemonComponent implements OnInit {
  pokemons: Pokemon[];
  query: string;

  constructor(private pokemonService: PokemonService) { }

  ngOnInit() {
    this.getPokemons()
  }

  getPokemons() {
    this.pokemonService
    .getPokemon()
    .subscribe(
      (data: Pokemon[]) => {
        this.pokemons = data
      }
    );
  }
}
