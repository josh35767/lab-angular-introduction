import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Iteration 3';
  randomArray = [
    {
      year: 2015,
      name: "The Boston Blahs",
      img: "/assets/blah.gif",
      bestPlayers: ["Rob Blah", "Bob Blah", "Jon Blah"]
    },
    {
      year: 2016,
      name: "Mighty Mangos",
      img: "/assets/mango.gif",
      bestPlayers: ["Mario Mango", "Tango Mango", "Max Mango"]
    },
    {
      year: 2017,
      name: "Limp Lettuce",
      img: "/assets/lettuce.gif",
      bestPlayers: ["Lucy Lettuce", "Luigi Lettuce", "Lucas Lettuce"]
    }
  ]
}
