import { Component, Input, OnInit } from '@angular/core';
import { PlanetsService } from '../services/planets/planets.service';
import { Planet } from '../planet';

@Component({
  selector: 'app-planet-card',
  templateUrl: './planet-card.component.html',
  styleUrls: ['./planet-card.component.scss']
})
export class PlanetCardComponent implements OnInit {
  Arr

  @Input() planet: Planet;
  constructor() { }

  ngOnInit() {
    this.Arr = Array;
  }

  conquer (planet: Planet) {
    planet.status = 'conquered';
  }

  abandon (planet: Planet) {
    planet.status = 'open';
    planet.trackStep = 0;
  }

  land (planet: Planet) {
    planet.status = 'landing';
  }

  orbit (planet: Planet) {
    planet.status = 'orbiting';
  }

  advance (planet: Planet) {
    planet.trackStep += 1;
    if (planet.trackStep === planet.track) {
      planet.status = 'conquered';
    }
  }

  regress (planet: Planet) {
    planet.trackStep = Math.max(0, planet.trackStep - 1);
  }
}
