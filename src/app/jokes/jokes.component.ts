import {Component, inject, Input} from '@angular/core';
import { CommonModule } from '@angular/common';
import {JokeService} from "../joke.service";
import {Joke} from "../joke";
import {MauricePipe} from "../maurice.pipe";


@Component({
  selector: 'app-jokes',
  standalone: true,
  imports: [CommonModule, MauricePipe],
  templateUrl: './jokes.component.html',
  styleUrl: './jokes.component.css'
})
export class JokesComponent {
  @Input() joke!: Joke
  aShortJoke : string = "Chuck Norris can access the DB from tfefzfzefzfeezfzfezfzehe UI"
}
