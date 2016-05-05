import { Component, Pipe, PipeTransform } from "angular2/core";
import { RouteParams, RouteData } from "angular2/router";

import { Pokemon, PokeService } from "./pokemon.service";

@Pipe({name: "uppercaseFirst"})
export class UppercaseFirstPipe implements PipeTransform {
  transform(input: string): string {
    if (input != null)
    input = input.toLowerCase();
    return input.substring(0, 1).toUpperCase() + input.substring(1);
  }
}

@Component({
  selector: "pokemon-details",
  templateUrl: "app/pokemon/pokemon-details.component.html",
  pipes: [UppercaseFirstPipe]
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
