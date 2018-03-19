import { Component, OnInit } from '@angular/core';
import { Card } from './card';
import { PlanetsService } from './services/planets/planets.service';
import { Planet } from './planet';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  card: Card = new Card();
  controlSet: string = null;

  constructor (private planetsService: PlanetsService) {}

  ngOnInit () {
    this.planetsService.getPlanets()
      .subscribe(data => {
      this.card.planets = data.map(x => new Planet(x));
      })
  }

  toggleControlSet (set: string): void {
    this.controlSet = this.controlSet === set ? null : set;
  }
}
