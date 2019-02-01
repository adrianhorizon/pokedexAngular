import { Component, OnInit, Input } from '@angular/core';
import { pokemonClass } from '../shared/AbstractClass/pokemonClass';
import { Pokemon } from '../shared/models/pokemon';
import { PokemonId } from '../shared/models/pokemonId';
@Component({
  selector: 'pokemon',
  templateUrl: './pokemon.component.html',
  styleUrls: ['./pokemon.component.scss']
})
export class PokemonComponent extends pokemonClass implements OnInit {
  query: string;
    
    ngOnInit() {
      this.getPokemons()
    }
}
