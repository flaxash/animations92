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
var AnimationService = (function () {
    function AnimationService() {
        this.anims = new Array();
    }
    AnimationService.prototype.getAnimations = function () {
        //todo
        this.anims[0] = {
            nid: 1,
            titre: 'Apprendre avec les jeux sérieux',
            categorie: 'Conférence',
            doc: 'string',
            horaires: '10h-16h',
            jour: 31,
            mois: 'Mars',
            type: 'Mercredi du numérique',
            image: 'string',
            infos: 'description plus complète de cette animation et de ses contenus'
        };
        return this.anims;
    };
    AnimationService = __decorate([
        core_1.Injectable(), 
        __metadata('design:paramtypes', [])
    ], AnimationService);
    return AnimationService;
}());
exports.AnimationService = AnimationService;
//# sourceMappingURL=animation.service.js.map