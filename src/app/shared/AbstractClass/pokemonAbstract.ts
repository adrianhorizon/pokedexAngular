import { PokemonService } from '../service/pokemon.service';
import { Pokemon } from '../models/pokemon';
import { Injectable } from '@angular/core';
import { PokemonId } from '../models/pokemonId';
import { ActivatedRoute } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export abstract class pokemonClass {
    pokemons: Pokemon[];
    pokemon: PokemonId;
    sub: any;
    
    constructor(
      private pokemonService: PokemonService,
      private route: ActivatedRoute
      ) { }

    getPokemons() {
        this.pokemonService
        .getPokemon()
        .subscribe(
          (data: Pokemon[]) => {
            this.pokemons = data
            console.log(data)
          }
        );
    }

    showPokemon() {
    }
    
    getPokemonId() {
      this.sub = this.route.params.subscribe(params => { 
        this.pokemonService
        .getPokemonId(params.id)
        .subscribe(
          (data: PokemonId) => {
            this.pokemon = data
            console.log(data)
          }
        );
      });
    }
}