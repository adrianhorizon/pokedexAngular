import { Component, OnInit } from '@angular/core';
import { PokemonId } from '../shared/models/pokemonId';
import { PokemonService } from '../shared/service/pokemon.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-pokemon-detail',
  templateUrl: './pokemon-detail.component.html',
  styleUrls: ['./pokemon-detail.component.scss']
})
export class PokemonDetailComponent implements OnInit {
  pokemon: PokemonId;
  sub: any;

  constructor(private pokemonService: PokemonService, private route: ActivatedRoute) { }

  ngOnInit() {
    this.showPokemon()
  }

  showPokemon() {
    this.sub = this.route.params.subscribe(params => { 
      this.pokemonService
      .getPokemonId(params.id)
      .subscribe(
        (data: PokemonId) => {this.pokemon = data
        console.log(data)}
      );
    });
  }

}
