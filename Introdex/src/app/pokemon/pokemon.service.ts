import { Injectable } from "angular2/core";
import { Http, Response } from "angular2/http";
import { Observable } from "rxjs/Rx";

// todo: add class
export class Pokemon {
    id: number;
    name: string;
    moves: Array<any>;
    constructor() {}
}


@Injectable()
export class PokeService {
    constructor(private _http: Http) { };
    getPokemon = () => {
        return this._http.get("http://pokeapi.co/api/v2/pokemon/")
            .map((response: Response) => response.json())
            .catch(this.logError);
    };
    getPokemonDetails = (value: Number) => {
        return this._http.get("http://pokeapi.co/api/v2/pokemon/" + value)
            .map((response: Response) => <Pokemon>response.json())
            .do(data => console.log(data))
            .catch(this.logError);
    };
    private logError = (error: Response) => {
        console.error(error);
        return Observable.throw(error.json() || "Poke API Server Error - Who\'s that Error?");
    };
}