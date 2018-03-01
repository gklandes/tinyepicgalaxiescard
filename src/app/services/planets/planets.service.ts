import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class PlanetsService {

  constructor(private http: HttpClient) { }

  configUrl = 'assets/planets.json';

  getPlanets () {
    return this.http.get(this.configUrl);
  }
}

export class Planet {
  name: string
  track: number
  conquest: number
  resource: string
  victory_points: number
  colonization: string
  note: string
}
