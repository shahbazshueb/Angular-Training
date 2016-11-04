/**
 * Created by shahbaz.ali on 11/4/2016.
 */
import {Component, Injectable} from '@angular/core';
import {HEROES} from "./mock-heroes";
import {Hero} from "./hero";

@Injectable()
export  class HeroService{
    getHeroes(): Promise<Hero[]> {
        return Promise.resolve(HEROES)
    }
    getHeroesSlowly(): Promise<Hero[]>{
        return new Promise<Hero[]>(resolve =>
            setTimeout(resolve,2000)).then(() => this.getHeroes());

    }
}