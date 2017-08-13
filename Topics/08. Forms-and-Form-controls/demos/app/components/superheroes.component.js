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
var superheroes_service_1 = require('../services/superheroes.service');
var superhero_model_1 = require('./../models/superhero.model');
var core_1 = require('@angular/core');
var SuperheroesComponent = (function () {
    function SuperheroesComponent(superheroesService) {
        this.superheroesService = superheroesService;
    }
    SuperheroesComponent.prototype.ngOnInit = function () {
        this.model = new superhero_model_1.Superhero('', '');
        this.superheroes = this.superheroesService.getAll();
    };
    SuperheroesComponent.prototype.create = function () {
        var superhero = this.superheroesService.create(this.model.name, this.model.secretIdentity);
        this.superheroes.push(superhero);
    };
    SuperheroesComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: 'superheroes',
            templateUrl: './superheroes.component.html'
        }), 
        __metadata('design:paramtypes', [superheroes_service_1.SuperheroesService])
    ], SuperheroesComponent);
    return SuperheroesComponent;
}());
exports.SuperheroesComponent = SuperheroesComponent;
;
//# sourceMappingURL=superheroes.component.js.map