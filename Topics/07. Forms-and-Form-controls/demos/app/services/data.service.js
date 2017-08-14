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
var core_1 = require('@angular/core');
var DataService = (function () {
    function DataService() {
    }
    DataService.prototype.getMany = function (klass) {
        var key = this.getKey(klass);
        var itemsStr = localStorage.getItem(key) || '[]';
        return JSON.parse(itemsStr);
    };
    DataService.prototype.add = function (item, klass) {
        var items = this.getMany(klass);
        items.push(item);
        var key = this.getKey(klass);
        var itemsString = JSON.stringify(items);
        localStorage.setItem(key, itemsString);
        return this;
    };
    DataService.prototype.getKey = function (klass) {
        return klass.name;
    };
    DataService = __decorate([
        core_1.Injectable(), 
        __metadata('design:paramtypes', [])
    ], DataService);
    return DataService;
}());
exports.DataService = DataService;
//# sourceMappingURL=data.service.js.map