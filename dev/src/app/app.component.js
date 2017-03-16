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
var animation_service_1 = require('./animation.service');
var AppComponent = (function () {
    function AppComponent(animationService) {
        this.animationService = animationService;
        this.title = 'Programme des animations - Atelier Canopé 92';
    }
    AppComponent.prototype.getAnimations = function () {
        this.animations = this.animationService.getAnimations();
        //.then(animations => this.animations = animations);
        this.anim = this.animations[0];
    };
    AppComponent.prototype.ngOnInit = function () {
        this.getAnimations();
    };
    AppComponent = __decorate([
        core_1.Component({
            selector: 'my-app',
            template: "<h1>{{title}}</h1><h2>{{anim.titre}}</h2>",
            providers: [animation_service_1.AnimationService]
        }), 
        __metadata('design:paramtypes', [animation_service_1.AnimationService])
    ], AppComponent);
    return AppComponent;
}());
exports.AppComponent = AppComponent;
//# sourceMappingURL=app.component.js.map