///<reference path="dashboard.component.ts"/>
import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent }   from './app.component';
import {FormsModule} from "@angular/forms";
import {HeroDetailComponent} from "./hero-detail.component";
import {HeroesComponent} from "./heroes.component";
import {HeroService} from "./hero.services";
import {RouterModule} from '@angular/router';
import {DashboardComponent} from "./dashboard.component";
@NgModule({
    imports:[
        BrowserModule,
        FormsModule,
        RouterModule.forRoot([
            {
                path: '',
                redirectTo: '/dashboard',
                pathMatch: 'full'
            },
            {
                path: 'heroes',
                component: HeroesComponent
            },
            {
                path: 'dashboard',
                component: DashboardComponent
            }
        ])
    ],

    declarations:   [ AppComponent, HeroDetailComponent, HeroesComponent, DashboardComponent],
    providers:      [HeroService],
    bootstrap:      [ AppComponent ]
})
export class AppModule { }

