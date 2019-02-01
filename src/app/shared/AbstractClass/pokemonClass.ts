import { PokemonService } from '../service/pokemon.service';
import { Pokemon } from '../models/pokemon';
import { Injectable } from '@angular/core';
import { PokemonId } from '../models/pokemonId';
import { ActivatedRoute } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class pokemonClass {
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
        (data: Pokemon[]) => this.pokemons = data
      );
    }

    getPokemonId() {
      this.sub = this.route.params.subscribe(params => { 
        this.pokemonService
        .getPokemonId(params.id)
        .subscribe(
          (data: PokemonId) => this.pokemon = data
        );
      });
    }

    showPokemon(id) {
      this.pokemonService
      .getPokemonId(id)
        .subscribe(
          (data: PokemonId) => this.pokemon = data
        );
    }
  
    submitPokemon(event) {
      event.preventDefault()
      const form = new FormData(event.target)
      const id = form.get('id')
      this.showPokemon(id)
    }
}