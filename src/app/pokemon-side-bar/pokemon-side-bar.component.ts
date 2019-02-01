import { Component, OnInit, Input } from '@angular/core';
import { Pokemon } from '../shared/models/pokemon';

@Component({
  selector: 'pokemon-side-bar',
  templateUrl: './pokemon-side-bar.component.html',
  styleUrls: ['./pokemon-side-bar.component.scss']
})
export class PokemonSideBarComponent implements OnInit {

  @Input("pokemon") pokemon: Pokemon;

  ngOnInit() {
  }

}
