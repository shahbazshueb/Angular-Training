/// <reference path="../node_modules/@types/node/index.d.ts" />
///<reference path="dashboard.component.ts"/>
import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent }   from './app.component';
import {FormsModule} from "@angular/forms";
import {HeroDetailComponent} from "./hero-detail.component";
import {HeroesComponent} from "./heroes.component";
import {HeroService} from "./hero.services";
import {HttpModule} from "@angular/http";
import {RouterModule} from '@angular/router';
import {DashboardComponent} from "./dashboard.component";
import {AppRoutingModule} from "./app-routing.module";
import {InMemoryDataService} from "./in-memort-data.service";
import { InMemoryWebApiModule } from 'angular2-in-memory-web-api';
@NgModule({
    imports:[
        BrowserModule,
        FormsModule,
        AppRoutingModule,
        HttpModule,
        InMemoryWebApiModule.forRoot(InMemoryDataService),

    ],

    declarations:   [ AppComponent, HeroDetailComponent, HeroesComponent, DashboardComponent],
    providers:      [HeroService],
    bootstrap:      [ AppComponent ]
})
export class AppModule { }

