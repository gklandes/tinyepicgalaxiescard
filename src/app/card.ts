import { Planet } from './planet';

export class Card {
  score: number
  level: number
  energy: number
  culture: number
  planets: Planet[]

  constructor() {
    this.score = 0;
    this.level = 1;
    this.energy = 2;
    this.culture = 1;
    this.planets = [];
  }

  getLevelProp(prop: string): number {
    const p = { points: 0, dice: 1, rockets: 2 }
    return [
      [0, 4, 2],
      [1, 5, 2],
      [2, 5, 3],
      [3, 6, 3],
      [5, 6, 4],
      [8, 7, 4],
    ][this.level - 1][p[prop]];
  }

  addEnergy () { if (this.energy < 7) this.energy++; }

  addCulture () { if (this.culture < 7) this.culture++; }
  
  useEnergy () { if (this.energy > 0) this.energy--; }
  
  useCulture () { if (this.culture > 0) this.culture--; }
  
  levelUp (rsc: string) {
      if (this.level < 7) {
        const cost = this.level + 1;
        if (this[rsc] >= cost) {
              this[rsc] = this[rsc] - cost;
              this.level++;
        }
      }
  }
  
  getPlanets (): Planet[] {
      return this.planets.reduce((arr,x) => {
        arr.push(x);
        return arr;
      },[]);
  }
  
  getScore (): number {
      var s = 0;
      s += this.getLevelProp('points')
      s += this.planets.reduce((t,x) => {
        return t + (x.status === 'conquered' ? x.victory_points : 0);
      },0);
      return s;
  }
  
}
