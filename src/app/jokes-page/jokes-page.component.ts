import {Component, inject} from '@angular/core';
import { CommonModule } from '@angular/common';
import {JokesComponent} from "../jokes/jokes.component";
import {Joke} from "../joke";
import {JokeService} from "../joke.service";

@Component({
  selector: 'app-jokes-page',
  standalone: true,
  imports: [CommonModule, JokesComponent],
  templateUrl: './jokes-page.component.html',
  styleUrl: './jokes-page.component.css'
})
export class JokesPageComponent {
  jokesService: JokeService = inject(JokeService)
  jokes: Joke[] = []
  constructor() {
    this.jokesService.getFiveJokes().then((receivedJokes: Joke[])=>{
      this.jokes = receivedJokes
    })
  }
}
