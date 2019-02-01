import { Component, OnInit, Input } from '@angular/core';
import { Pokemon } from '../shared/models/pokemon';

@Component({
  selector: 'pokemon-side',
  templateUrl: './pokemon-side.component.html',
  styleUrls: ['./pokemon-side.component.scss']
})
export class PokemonSideComponent implements OnInit {
  
  @Input("pokemon") pokemon: Pokemon;

  ngOnInit() {
  }

}
