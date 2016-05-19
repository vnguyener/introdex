import { Component, OnInit } from "angular2/core";
import { HTTP_PROVIDERS } from "angular2/http";
import { RouteConfig, ROUTER_DIRECTIVES, ROUTER_PROVIDERS, Router } from "angular2/router";

import { PokemonDetailsComponent } from "./pokemon/pokemon-details/pokemon-details.component";
import { PokemonListComponent } from "./pokemon/pokemon-list/pokemon-list.component";
import { PokeService } from "./shared/services/pokemon.service";

// todo: add pokemon.component barrel

@Component({
    selector: "app-main",
    templateUrl: "./app/app.component.html",
    directives: [
        ROUTER_DIRECTIVES,
        PokemonListComponent],
    providers: [
        ROUTER_PROVIDERS,
        HTTP_PROVIDERS,
        PokeService]
})

@RouteConfig([
    { path: "/pokedex/:id", name: "Pokedex", component: PokemonDetailsComponent }
])

export class AppComponent implements OnInit {
    id: number;

    constructor() {
    }

    ngOnInit() {
        console.log("Introdex initializing...");
    }

    getRandomPokemon = () => {
        return Math.floor(Math.random() * (1 - 720)) + 720;
    };
}