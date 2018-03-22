import { Component, OnInit } from '@angular/core';
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
  }

  toggleControlSet (set: string): void {
    this.controlSet = this.controlSet === set ? null : set;
  }

  setupWindow (): void  {
    var col = document.getElementById('planetsCol');
    console.log('col',col.offsetHeight, 'window', window.innerHeight);
    col.style.height = (window.innerHeight - col.offsetHeight).toString();
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
}
