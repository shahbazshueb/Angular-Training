
import {Component, OnInit} from '@angular/core';
import {Router} from '@angular/router';
import {Hero} from './hero'
import {HeroService} from "./hero.services";

@Component({
    moduleId: module.id,
    selector: 'my-heroes',
    providers: [HeroService],
    templateUrl: './heroes.component.html',
    styleUrls: ['./heroes.component.css']
})
export class HeroesComponent implements  OnInit{

    title = 'Tour of Heroes';
    heroes: Hero[];
    selectedHero: Hero;
    onSelect(hero: Hero): void {
        this.selectedHero = hero;
    };
    getHeroes(): void{
        this.heroService.getHeroes().then(heroes => this.heroes = heroes);
    };
    constructor(
        private heroService: HeroService,
        private router: Router
    ) {}
    ngOnInit():void{
        this.getHeroes();
    };
    gotoDetails(): void{
    this.router.navigate(['/detail', this.selectedHero.id])
}

}
