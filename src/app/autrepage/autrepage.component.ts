import {Component, inject} from '@angular/core';
import { CommonModule } from '@angular/common';
import {FruitsService} from "../fruits.service";
import {Fruit} from "../fruit";
import {RouterLink} from "@angular/router";

@Component({
  selector: 'app-autrepage',
  standalone: true,
  imports: [CommonModule, RouterLink],
  templateUrl: './autrepage.component.html',
  styleUrl: './autrepage.component.css'
})
export class AutrepageComponent {

  fruitsService : FruitsService = inject(FruitsService)
  fruits: Fruit[] = this.fruitsService.getFruits()

  constructor() {
    console.log(this.fruitsService.getFruitById(2))
  }


}
