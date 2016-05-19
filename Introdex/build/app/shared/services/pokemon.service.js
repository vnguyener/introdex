System.register(["angular2/core", "angular2/http", "rxjs/Rx"], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __metadata = (this && this.__metadata) || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };
    var core_1, http_1, Rx_1;
    var PokemonDetails, PokeService;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (http_1_1) {
                http_1 = http_1_1;
            },
            function (Rx_1_1) {
                Rx_1 = Rx_1_1;
            }],
        execute: function() {
            // todo: add class
            PokemonDetails = (function () {
                function PokemonDetails() {
                }
                return PokemonDetails;
            }());
            exports_1("PokemonDetails", PokemonDetails);
            PokeService = (function () {
                function PokeService(_http) {
                    var _this = this;
                    this._http = _http;
                    this.getPokemon = function () {
                        return _this._http.get("http://pokeapi.co/api/v2/pokemon/")
                            .map(function (response) { return response.json(); })
                            .catch(_this.logError);
                    };
                    this.getPokemonDetails = function (value) {
                        return _this._http.get("http://pokeapi.co/api/v2/pokemon/" + value)
                            .map(function (response) { return response.json(); })
                            .do(function (data) { return console.log(data); })
                            .catch(_this.logError);
                    };
                    this.logError = function (error) {
                        console.error(error);
                        return Rx_1.Observable.throw(error.json() || "Poke API Server Error - Who\'s that Error?");
                    };
                }
                ;
                PokeService = __decorate([
                    core_1.Injectable(), 
                    __metadata('design:paramtypes', [http_1.Http])
                ], PokeService);
                return PokeService;
            }());
            exports_1("PokeService", PokeService);
        }
    }
});
