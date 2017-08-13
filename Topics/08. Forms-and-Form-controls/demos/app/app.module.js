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
var superhero_form_component_1 = require('./components/superhero-form/superhero-form.component');
var forms_1 = require('@angular/forms');
var core_1 = require('@angular/core');
var platform_browser_1 = require('@angular/platform-browser');
var data_service_1 = require('./services/data.service');
var superheroes_service_1 = require('./services/superheroes.service');
var app_component_1 = require('./app.component');
var superheroes_component_1 = require('./components/superheroes/superheroes.component');
var AppModule = (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        core_1.NgModule({
            imports: [
                platform_browser_1.BrowserModule,
                forms_1.FormsModule
            ],
            declarations: [
                app_component_1.AppComponent,
                superhero_form_component_1.SuperheroFormComponent,
                superheroes_component_1.SuperheroesComponent
            ],
            providers: [
                data_service_1.DataService,
                superheroes_service_1.SuperheroesService
            ],
            bootstrap: [
                app_component_1.AppComponent
            ]
        }), 
        __metadata('design:paramtypes', [])
    ], AppModule);
    return AppModule;
}());
exports.AppModule = AppModule;
//# sourceMappingURL=app.module.js.map