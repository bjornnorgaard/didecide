import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {

  recipies = [
    'Chili con carne',
    'Pizza',
    'Scramled eggs',
    'Pommes ala Nugget',
	'Pasta med kødsovs',
	'Risret',
	'Kyllingedeller',
	'Taco eller wraps',
    'Salat',
	'Brasede kartofler',
	'Tarteletter',
	'Lasagne',
	'Kylling ala Karry',
	'Wok',
	'Kødtærte',
	'Pølse, kebab eller kyllingemix',
    'Svensk pølseret',
    'Hot dogs',
    'Burger',
    'Pastasalat',
    'Scramble eggs',
    'Tortilla',
    'Taco',
    'Lasagne',
    'Risret',
    'Pølsemix',
    'Wokret',
    'IT\'S NACHOS MOTHERFUCKER!',
  ];

  randomRecipe: string;
  loading = false;

  private today: string;

  ngOnInit() {
    this.today = new Date().toDateString();
    const alreadyGeneratedRecipe = localStorage.getItem(this.today);

    if (!!alreadyGeneratedRecipe) {
      this.randomRecipe = alreadyGeneratedRecipe;
    }
  }

  findRandom() {
    this.loading = true;

    if (!this.randomRecipe) {
      this.randomRecipe = this.recipies[this.getRandomInt(0, this.recipies.length - 1)];
      localStorage.setItem(this.today, this.randomRecipe);
    }

    setTimeout(() => {
      this.loading = false;
    }, 2000);
  }

  getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }
}


