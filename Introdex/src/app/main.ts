// application bootstrap

import { bootstrap } from "angular2/platform/browser";
import { ROUTER_PROVIDERS } from "angular2/router";

import { AppComponent } from "./app.component";


bootstrap(AppComponent, [ROUTER_PROVIDERS])
    .then(success => console.log("bootstrap completed."))
    .catch(error => console.log(error));