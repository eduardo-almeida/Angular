import { MonstroItem } from "../monstro-item/monstro-item.model";

export class Combate {
  constructor(public monstroItem: MonstroItem,
              public quantity: number = 1){}

  dificuldade(): number{
    return this.monstroItem.nivel * this.quantity
  }
}
