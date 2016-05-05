import { Component } from "angular2/core";
import { RouteParams, RouteData } from "angular2/router";

import { Pokemon, PokeService } from "./pokemon.service";

@Component({
  selector: "pokemon-details",
  templateUrl: "app/pokemon/pokemon-details.component.html",
})



export class PokemonDetailsComponent {
  errorMessage: string;
  id: Number;
  pokemonDetails: Pokemon;

  constructor(params: RouteParams, routeData: RouteData, private _pokeService: PokeService) {
    this.id = parseInt(params.get("id") ? routeData.get("id") : 1);
  }

  ngOnInit() { this.getPokemon(this.id); }

  getPokemon = (id?: Number) => {
    this._pokeService.getPokemonDetails(id)
      .subscribe(
        pokemon => this.pokemonDetails = pokemon,
        error => this.errorMessage = <any>error
      );
  };

  getMoves = () => {
    return this.pokemonDetails.moves;
  };
}
