import { Component, OnInit } from '@angular/core';
import { pokemonClass } from '../shared/AbstractClass/pokemonAbstract';

@Component({
  selector: 'pokemon-side',
  templateUrl: './pokemon-side.component.html',
  styleUrls: ['./pokemon-side.component.scss']
})
export class PokemonSideComponent extends pokemonClass implements OnInit {
  
  ngOnInit() {
    this.getPokemonId()
  }

}
