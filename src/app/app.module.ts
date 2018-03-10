import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { PlanetsService } from './services/planets/planets.service';
import { PlanetCardComponent } from './planet-card/planet-card.component';


@NgModule({
  declarations: [
    AppComponent,
    PlanetCardComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
  ],
  providers: [
    PlanetsService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
