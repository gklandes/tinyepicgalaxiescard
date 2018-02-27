import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  card: Card = {
    level: 1,
    energy: 2,
    culture: 1
  };

  constructor () {}

  ngOnInit () {
  }
}

class Card {
  level: Number
  energy: Number
  culture: Number
}