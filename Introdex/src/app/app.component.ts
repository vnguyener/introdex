import { Component, OnInit } from "angular2/core";
import { HTTP_PROVIDERS } from "angular2/http";

import { PokemonListComponent } from "./pokemon/pokemon-list.component";
import { PokeService } from "./pokemon/pokemon.service";


@Component({
    selector: "app-main",
    templateUrl: "./app/app.html",
    directives: [PokemonListComponent],
    providers: [
        HTTP_PROVIDERS,
        PokeService]
})

export class AppComponent implements OnInit {
    ngOnInit() {
        console.log("Introdex initializing...");
    }
}