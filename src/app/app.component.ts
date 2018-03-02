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

  conquer (planet: Planet) {
    planet.conquered = true;
  }

  abandon (planet: Planet) {
    planet.conquered = false;
  }

  getPlanets (conquered: boolean): Planet[] {
    return this.planets.reduce((arr,x) => {
      if (!!x.conquered === conquered) arr.push(x);
      return arr;
    },[]);
  }

  getScore (): number {
    var s = 0;
    s += this.card.getLevelProp('points')
    s += this.planets.reduce((t,x) => {
      return t + (x.conquered ? x.victory_points : 0);
    },0);
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

  getLevelProp (prop: string): number {
    const p = {points:0,dice:1,rockets:2}
    return [
      [0,4,2],
      [1,5,2],
      [2,5,3],
      [3,6,3],
      [5,6,4],
      [8,7,4],
    ][this.level-1][p[prop]];
  }
}
