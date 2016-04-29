import { Component } from "angular2/core";
import { PokeService } from "./pokemon.service";

// import poke details

@Component({
  selector: "poke-list",
  templateUrl: "app/pokemon/pokemon-list.component.html"
})
export class PokemonListComponent {
    error: string;
    pokemon: Promise<any>;
    selectedPokemon: any;
    
    constructor(private _pokeService: PokeService) { }
    
    ngOnInit() { this.getPokemon(); }
    
    getPokemon = (value?: Number) => {
        this.pokemon = this._pokeService.getPokemon();
        console.log(this.pokemon);
    };
}