import { Component } from "angular2/core";
import { Location } from "angular2/platform/common";
import { Router, RouteParams } from "angular2/router";
import { PokemonDetails, PokeService } from "../../shared/services/pokemon.service";
import { UppercaseFirstPipe } from "../../shared/pipes";

@Component({
  selector: "pokemon-details",
  templateUrl: "app/pokemon/pokemon-details/pokemon-details.component.html",
  pipes: [UppercaseFirstPipe]
})

export class PokemonDetailsComponent {
  errorMessage: string;
  id: Number;
  pokemonDetails: PokemonDetails;

  constructor(private _pokeService: PokeService, params: RouteParams) {
    this.id = parseInt(params.get("id"));
  }

  ngOnInit() {
    this.getPokemonDetails(this.id);
  }

  getPokemonDetails = (id?: Number) => {
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
