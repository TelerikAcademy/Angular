"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var superhero_model_1 = require('./../models/superhero.model');
var data_service_1 = require('./data.service');
var core_1 = require('@angular/core');
var SuperheroesService = (function () {
    function SuperheroesService(dataService) {
        this.dataService = dataService;
    }
    SuperheroesService.prototype.getAll = function () {
        return this.dataService.getMany(superhero_model_1.Superhero);
    };
    SuperheroesService.prototype.create = function (name, secretIdentity, img) {
        var superhero = new superhero_model_1.Superhero(name, secretIdentity, img);
        this.dataService.add(superhero, superhero_model_1.Superhero);
        return superhero;
    };
    SuperheroesService = __decorate([
        core_1.Injectable(), 
        __metadata('design:paramtypes', [data_service_1.DataService])
    ], SuperheroesService);
    return SuperheroesService;
}());
exports.SuperheroesService = SuperheroesService;
;
//# sourceMappingURL=superheroes.service.js.map