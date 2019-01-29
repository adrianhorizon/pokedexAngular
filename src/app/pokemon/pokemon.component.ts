import { Component, OnInit } from '@angular/core';
import { pokemonClass } from '../shared/AbstractClass/pokemonAbstract';
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
