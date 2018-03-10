import { Component, Input, OnInit } from '@angular/core';
import { PlanetsService, Planet } from '../services/planets/planets.service';

@Component({
  selector: 'app-planet-card',
  templateUrl: './planet-card.component.html',
  styleUrls: ['./planet-card.component.css']
})
export class PlanetCardComponent implements OnInit {

  @Input() planet: Planet;
  constructor() { }

  ngOnInit() {
  }

  conquer (planet: Planet) {
    planet.conquered = true;
  }

  abandon (planet: Planet) {
    planet.conquered = false;
  }
}
