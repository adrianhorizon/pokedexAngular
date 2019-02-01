import { Component, OnInit } from '@angular/core';
import { Pokemon } from '../shared/models/pokemon';
import { PokemonId } from '../shared/models/pokemonId';
import { PokemonService } from '../shared/service/pokemon.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'pokemon-detail',
  templateUrl: './pokemon-detail.component.html',
  styleUrls: ['./pokemon-detail.component.scss']
})
export class PokemonDetailComponent implements OnInit {

  public pokemons: Pokemon[];
  public pokemon: PokemonId;
  public sub: any;

  constructor(
    private pokemonService: PokemonService,
    private route: ActivatedRoute
  ) { }

  ngOnInit() {
    this.getPokemonId();
  }

  getPokemonId() {
    this.sub = this.route.params.subscribe(params => {
      this.pokemonService
        .getPokemonId(params.id)
        .subscribe((data: PokemonId) => {
          this.pokemon = data;
        });
    });
  }

  showPokemon(id) {
    this.pokemonService
      .getPokemonId(id)
      .subscribe((data: PokemonId) => {
        this.pokemon = data;
      });
  }

  submitPokemon(event) {
    event.preventDefault();
    const form = new FormData(event.target);
    const id = form.get('id');
    this.showPokemon(id);
  }
}
