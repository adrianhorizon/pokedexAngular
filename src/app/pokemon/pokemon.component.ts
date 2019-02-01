import { Component, OnInit } from '@angular/core';
import { Pokemon } from '../shared/models/pokemon';
import { PokemonId } from '../shared/models/pokemonId';
import { PokemonService } from '../shared/service/pokemon.service';
@Component({
  selector: 'pokemon',
  templateUrl: './pokemon.component.html',
  styleUrls: ['./pokemon.component.scss']
})
export class PokemonComponent implements OnInit {

  public pokemons: any;
  public pokemon: any = [];
  public sub: any;
  public query: string;
  public offset: number = 0;
  public limit: number = 20;

  constructor(
    private readonly pokemonService: PokemonService
  ) { }

  ngOnInit() {
    this.getPokemons();
  }

  onSubmit() {
    this.offset += 20;
    this.getPokemons();
  }

  getPokemons() {
    this.pokemonService
      .getPokemon(this.offset, this.limit)
      .subscribe((data: Pokemon[]) => {
        this.pokemons = data;
        Object.keys(this.pokemons.results).map(key => {
          this.showPokemon(this.pokemons.results[key].name);
        });
      });
  }

  showPokemon(id: any) {
    this.pokemonService
      .getPokemonId(id)
      .subscribe((data: PokemonId) => {
        const newPokemon = {
          id: data.id,
          name: data.name,
          imageFront: data.sprites['front_default'],
          imageBack: data.sprites['back_default'],
          species: data['species'].url,
        };

        this.pokemon.push(newPokemon);
        this.pokemon.sort((array, order) => array.id - order.id);
      });
  }

}
