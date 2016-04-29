import { Component, OnInit } from "angular2/core";
import { HTTP_PROVIDERS } from "angular2/http";
import { RouteConfig, ROUTER_DIRECTIVES, ROUTER_PROVIDERS } from "angular2/router";

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
    { path: "/pokemon/1", component: PokemonDetailsComponent, data: { id: 1 } , useAsDefault: true },
    { path: "/pokemon/:id", name: "PokemonDetail", component: PokemonDetailsComponent}
])
export class AppComponent implements OnInit {
    ngOnInit() {
        console.log("Introdex initializing...");
    }
}