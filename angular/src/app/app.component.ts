import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  recipies = [
    'Chili con carne',
    'Pizza',
    'Omelet',
    'Bønnesalat',
    'Pasta med pesto'
  ];

  randomRecipe: string;

  findRandom() {
    this.randomRecipe = this.recipies[this.getRandomInt(0, this.recipies.length - 1)];
  }

  getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }
}


