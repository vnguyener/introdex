import { Component, OnInit } from "angular2/core";
import { PokeService } from "../../shared/services/pokemon.service";

@Component({
    selector: "pokemon-list",
    templateUrl: "app/pokemon/pokemon-list/pokemon-list.component.html"
})
export class PokemonListComponent implements OnInit {
    pokemon: Array<any>;

    constructor(private _pokeService: PokeService) { }

    ngOnInit() {
        this.getPokemonList();
    }

    getPokemonList = () => {
        this._pokeService.getPokemon()
            .subscribe(list => console.log(list));
    };
}