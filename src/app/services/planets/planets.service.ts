import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Planet } from '../../planet';

@Injectable()
export class PlanetsService {
  private configUrl = 'assets/planets.json';

  constructor(private http: HttpClient) { }

  getPlanets () {
    return this.http.get<Planet[]>(this.configUrl);
  }
}
