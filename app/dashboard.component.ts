/**
 * Created by shahbazshueb on 11/7/16.
 */
import {Component, OnInit} from '@angular/core';
import {Hero} from './hero';
import {HeroService} from './hero.services';
@Component({
    moduleId:  module.id,
    selector: 'my-dashboard',
    templateUrl: 'dashboard.component.html',
    styleUrls:['./dashboard.component.css']
})
export class DashboardComponent implements  OnInit{
    heroes: Hero[] = [];
    constructor(private heroservice: HeroService){}
    ngOnInit():void{
        this.heroservice.getHeroes()
            .then(heroes=>this.heroes = heroes.slice(1,5));
    }

}