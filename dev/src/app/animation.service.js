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
var http_1 = require('@angular/http');
//import 'rxjs/add/operator/map';
require('rxjs/add/operator/catch');
require('rxjs/add/operator/toPromise');
var AnimationService = (function () {
    function AnimationService(http) {
        this.http = http;
        //private animationsUrl = 'https://www.reseau-canope.fr/atelier-hauts-de-seine/drupal7/?q=gateway/views/animations.json;
        this.animationsUrl = 'json/animations.json';
    }
    AnimationService.prototype.getAllAnimations = function () {
        console.log('http request begining ...');
        return this.http.get(this.animationsUrl)
            .toPromise()
            .then(function (response) { return response.json(); })
            .catch(this.handleError);
    };
    AnimationService.prototype.handleError = function (error) {
        console.error('An error occurred', error); // for demo purposes only
        return Promise.reject(error.message || error);
    };
    AnimationService = __decorate([
        core_1.Injectable(), 
        __metadata('design:paramtypes', [http_1.Http])
    ], AnimationService);
    return AnimationService;
}());
exports.AnimationService = AnimationService;
//# sourceMappingURL=animation.service.js.map