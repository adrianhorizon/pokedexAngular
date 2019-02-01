import { Component, OnInit } from '@angular/core';
import { pokemonClass } from '../shared/AbstractClass/pokemonClass';
@Component({
  selector: 'pokemon-detail',
  templateUrl: './pokemon-detail.component.html',
  styleUrls: ['./pokemon-detail.component.scss']
})
export class PokemonDetailComponent extends pokemonClass implements OnInit {

  ngOnInit() {
    this.getPokemonId()
  }
}
