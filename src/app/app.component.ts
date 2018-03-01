import { Component, OnInit } from '@angular/core';
import { PlanetsService, Planet } from './services/planets/planets.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  card: Card = new Card();
  planets: Planet[] = [];

  constructor (private planetsService: PlanetsService) {}

  ngOnInit () {
    this.planetsService.getPlanets()
      .subscribe(data => this.planets = data);
  }

  addEnergy () { if (this.card.energy < 7) this.card.energy++; }

  addCulture () { if (this.card.culture < 7) this.card.culture++; }

  useEnergy () { if (this.card.energy > 0) this.card.energy--; }

  useCulture () { if (this.card.culture > 0) this.card.culture--; }
  
  levelUp (rsc: string) {
    if (this.card.level < 7) {
      const cost = this.card.level + 1;
      if (this.card[rsc] >= cost) {
        this.card[rsc] = this.card[rsc] - cost;
        this.card.level++;
      }
    }
  }
}

  getScore (): number {
    var s = 0;
    s += this.card.getLevelPoints()
    return s;
  }
}

class Card {
  score: number
  level: number
  energy: number
  culture: number

  constructor () {
    this.score = 0;
    this.level = 1;
    this.energy = 2;
    this.culture = 1;
  }

  getLevelPoints (): number {
    return [null,0,1,2,3,5,8][this.level];
  }
}