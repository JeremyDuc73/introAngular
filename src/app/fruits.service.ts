import {Injectable} from '@angular/core';
import {Fruit} from "./fruit";

@Injectable({
  providedIn: 'root'
})
export class FruitsService {

  constructor() { }

  tableauFruits: Fruit[] = [
    {
      id: 1,
      name: "banane",
      couleur: "jaune"
    },
    {
      id: 2,
      name: "pomme",
      couleur: "rouge"
    }
  ]

  getFruits(): Fruit[]
  {
    return this.tableauFruits
  }

  getFruitById(id:number)
  {
    return this.tableauFruits.find((fruit: Fruit) => fruit.id == id)!
  }
}
