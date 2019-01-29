import { Component, OnInit } from '@angular/core';
import { pokemonClass } from '../shared/AbstractClass/pokemonAbstract';

@Component({
  selector: 'pokemon-side-bar',
  templateUrl: './pokemon-side-bar.component.html',
  styleUrls: ['./pokemon-side-bar.component.scss']
})
export class PokemonSideBarComponent extends pokemonClass implements OnInit {

  ngOnInit() {
    this.getPokemonId()
  }

}
