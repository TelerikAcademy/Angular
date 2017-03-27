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
var superheroes_service_1 = require('../../services/superheroes.service');
var superhero_model_1 = require('../../models/superhero.model');
var core_1 = require('@angular/core');
var SuperheroFormComponent = (function () {
    function SuperheroFormComponent(superheroesService) {
        this.superheroesService = superheroesService;
        this.emitter = new core_1.EventEmitter();
    }
    SuperheroFormComponent.prototype.ngOnInit = function () {
        this.model = new superhero_model_1.Superhero('', '', '');
    };
    SuperheroFormComponent.prototype.create = function () {
        var superhero = this.superheroesService.create(this.model.name, this.model.secretIdentity, this.model.img);
        this.emitter.emit(superhero);
    };
    __decorate([
        core_1.Output('created'), 
        __metadata('design:type', core_1.EventEmitter)
    ], SuperheroFormComponent.prototype, "emitter", void 0);
    SuperheroFormComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: 'superhero-form',
            templateUrl: './superhero-form.component.html',
            styleUrls: [
                './superhero-form.component.css'
            ]
        }), 
        __metadata('design:paramtypes', [superheroes_service_1.SuperheroesService])
    ], SuperheroFormComponent);
    return SuperheroFormComponent;
}());
exports.SuperheroFormComponent = SuperheroFormComponent;
;
//# sourceMappingURL=superhero-form.component.js.map