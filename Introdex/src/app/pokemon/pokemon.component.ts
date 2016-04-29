import { Component, OnInit } from "angular2/core";
import { RouteConfig, ROUTER_DIRECTIVES } from "angular2/router";

import { PokemonListComponent } from "./pokemon-list.component";
import { PokemonDetailsComponent } from "./pokemon-details.component";
import { PokeService } from "./pokemon.service";

@Component({
  selector: "pokemon-root",
  template: "<router-outlet></router-outlet>",
  directives: [ROUTER_DIRECTIVES],
  providers: [PokeService]
})
@RouteConfig([
  { path: "/", name: "List", component: PokemonListComponent, useAsDefault: true },
  { path: "/:id/Detail", name: "Detail", component: PokemonDetailsComponent }
])
export class PokemonComponent { }
