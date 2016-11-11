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
const core_1 = require('@angular/core');
const router_1 = require('@angular/router');
const hero_services_1 = require("./hero.services");
let HeroesComponent = class HeroesComponent {
    constructor(heroService, router) {
        this.heroService = heroService;
        this.router = router;
        this.title = 'Tour of Heroes';
    }
    onSelect(hero) {
        this.selectedHero = hero;
    }
    ;
    getHeroes() {
        this.heroService.getHeroes().then(heroes => this.heroes = heroes);
    }
    ;
    ngOnInit() {
        this.getHeroes();
    }
    ;
    gotoDetails() {
        this.router.navigate(['/detail', this.selectedHero.id]);
    }
};
HeroesComponent = __decorate([
    core_1.Component({
        moduleId: module.id,
        selector: 'my-heroes',
        providers: [hero_services_1.HeroService],
        templateUrl: './heroes.component.html',
        styleUrls: ['./heroes.component.css']
    }), 
    __metadata('design:paramtypes', [hero_services_1.HeroService, router_1.Router])
], HeroesComponent);
exports.HeroesComponent = HeroesComponent;
//# sourceMappingURL=heroes.component.js.map