import { Component, OnInit } from "angular2/core";
import { HTTP_PROVIDERS } from "angular2/http";
import { RouteConfig, ROUTER_DIRECTIVES, ROUTER_PROVIDERS, Router } from "angular2/router";

import { PokemonDetailsComponent } from "./pokemon/pokemon-details.component";
import { PokeService } from "./pokemon/pokemon.service";

// todo: add pokemon.component barrel

@Component({
    selector: "app-main",
    templateUrl: "./app/app.component.html",
    directives: [
        ROUTER_DIRECTIVES,
        PokemonDetailsComponent],
    providers: [
        ROUTER_PROVIDERS,
        HTTP_PROVIDERS,
        PokeService]
})

@RouteConfig([
    { path: "/pokemon/:id", name: "Details", component: PokemonDetailsComponent }
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