// application bootstrap

import { bootstrap } from "angular2/platform/browser";
import { AppComponent } from "./app.component";


bootstrap(AppComponent)
    .then(success => console.log("bootstrap completed."))
    .catch(error => console.log(error));