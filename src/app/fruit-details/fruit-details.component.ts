import {Component, inject, Input} from '@angular/core';
import { CommonModule } from '@angular/common';
import {Fruit} from "../fruit";
import {FruitsService} from "../fruits.service";
import {ActivatedRoute} from "@angular/router";

@Component({
  selector: 'app-fruit-details',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './fruit-details.component.html',
  styleUrl: './fruit-details.component.css'
})
export class FruitDetailsComponent {
  fruit!: Fruit
  fruitService: FruitsService = inject(FruitsService)
  route: ActivatedRoute = inject(ActivatedRoute)
  constructor() {
    let id = Number(this.route.snapshot.params['id'])
    this.fruit = this.fruitService.getFruitById(id)
  }
}
