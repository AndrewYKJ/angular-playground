import { Component, OnInit } from '@angular/core';
import { Movies } from 'src/app/model/movies/movies';

@Component({
  selector: 'app-tabview',
  templateUrl: './tabview.component.html',
  styleUrls: ['./tabview.component.scss']
})
export class TabviewComponent implements OnInit {

  constructor() { }
  active = 1;
  ngOnInit(): void {
  }
  example: Movies = {
    "moviesList": [
      {
        "company": "Marvel Cinematic Universal",
        "list":
          [
            {
              "name": "Iron Man",
              "series":
                [
                  {
                    "name": "Iron Man",
                    "releaseDate": "2008",
                    "description": "Tony Stark 1"
                  }, {
                    "name": "Iron Man 2",
                    "releaseDate": "2010",
                    "description": "Tony Stark 2"
                  }, {
                    "name": "Iron Man 3",
                    "releaseDate": "2013",
                    "description": "Tony Stark 3"
                  }

                ]
            },
            {
              "name": "Black Panther",
              "series":
                [
                  {
                    "name": "Black Panther",
                    "releaseDate": "2018",
                    "description": "Wakanda Forever"
                  }, {
                    "name": "Black Panther : Wakanda Forever",
                    "releaseDate": "2022",
                    "description": "Wakanda Forever 1"
                  }

                ]
            }
          ]
      },
      {
        "company": "DC Comics",
        "list":
          [
            {
              "name": "Batman",
              "series":
                [
                  {
                    "name": "Batman V Superman : Dawn of Justice",
                    "releaseDate": "2016",
                    "description": "Fearing the actions of a god-like super hero left unchecked, Gotham City’s own formidable, forceful vigilante takes on Metropolis’s most revered, modern-day savior, while the world wrestles with what sort of hero it really needs. And with Batman and Superman at war with one another, a new threat quickly arises, putting mankind in greater danger than it’s ever known before."
                  }, {
                    "name": "The Dark Knight",
                    "releaseDate": "2010",
                    "description": "After Gordon, Dent and Batman begin an assault on Gotham's organised crime, the mobs hire the Joker, a psychopathic criminal mastermind who offers to kill Batman and bring the city to its knees."
                  }

                ]
            },
            {
              "name": "Man of Steel",
              "series":
                [
                  {
                    "name": "Batman V Superman : Dawn of Justice",
                    "releaseDate": "2016",
                    "description": "Fearing the actions of a god-like super hero left unchecked, Gotham City’s own formidable, forceful vigilante takes on Metropolis’s most revered, modern-day savior, while the world wrestles with what sort of hero it really needs. And with Batman and Superman at war with one another, a new threat quickly arises, putting mankind in greater danger than it’s ever known before."
                  },
                  {
                    "name": "Man of Steel: The Early Years",
                    "releaseDate": "2016",
                    "description": "After Clark Kent must use his secret powers to intervene in a crisis, he returns to Smallville to learn more about his origins and the hero he was born to be. In this junior novel based on the feature film Man of Steel, there is also an eight-page insert with movie stills to enjoy!"
                  },
                  {
                    "name": "Man of Steel: The Fate of Krypton",
                    "releaseDate": "2016",
                    "description": "This easy-to-read children’s book chronicles the early life of the boy who will grow up to be Superman. The story begins on planet Krypton, where disaster is about to strike. The planet is doomed. With no time to spare, Superman’s parents, Jor-El and Lara, make the heartbreaking decision to save their only son by sending him to Earth."
                  }
                ]
            }
          ]
      }
    ]
  }
  
  
  switchTab(tab: number) {
    switch (tab) {
      case 1:
        this.active = 1;
        break;
     case 2:
       this.active = 2;
       break;
     case 3:
        this.active = 3;
       break;
     default:
       this.active = 1;
       break;
   }
    }
}
