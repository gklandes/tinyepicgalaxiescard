import { Component, OnInit, Pipe, PipeTransform } from '@angular/core';
import { Card } from './card';
import { PlanetsService } from './services/planets/planets.service';
import { Planet } from './planet';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  card: Card = new Card();
  controlSet: string = null;

  constructor (private planetsService: PlanetsService) {}

  ngOnInit () {
    this.planetsService
      .getPlanets()
      .subscribe(data => {
        this.card.planets = data.map(x => new Planet(x));
      })
    ;
    this.setupWindow();
    window.addEventListener('resize', this.setupWindow);
  }

  setupWindow (): void  {
    var col = document.getElementById('planetsCol');
    var h = window.innerHeight - col.offsetTop;
    col.setAttribute('style','height:'+h+'px');
    col.style.height = h.toString();
  }

  toggleFullScreen () {
    var doc = window.document;
    var docEl = doc.documentElement;

    var requestFullScreen = docEl.requestFullscreen || docEl['mozRequestFullScreen'] || docEl.webkitRequestFullScreen || docEl['msRequestFullscreen'];
    var cancelFullScreen = doc.exitFullscreen || doc['mozCancelFullScreen'] || doc.webkitExitFullscreen || doc['msExitFullscreen'];

    if(!doc.fullscreenElement && !doc['mozFullScreenElement'] && !doc.webkitFullscreenElement && !doc['msFullscreenElement']) {
      requestFullScreen.call(docEl);
    }
    else {
      cancelFullScreen.call(doc);
    }
  }

  toggleControlSet (set: string): void {
    this.controlSet = this.controlSet === set ? null : set;
  }
}

@Pipe({
    name: 'planetGroup',
    // pure: false
})
export class PlanetGroupPipe implements PipeTransform {
    transform(planets: Planet[], status: string): Planet[] {
        if (!planets || !status) { return planets; }

        // filter planets array, planets which match and return true will be
        // kept, false will be filtered out
        return planets.filter(planet => planet.status === status);
    }
}