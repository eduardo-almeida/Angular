import { MonstroItem } from "../monstro-item/monstro-item.model"
import { Combate } from "./combate.model"

export class CombateService {
  monstros: Combate[] = []

  clear(){
    this.monstros = []
  }

  addMonstro(monstro: MonstroItem){
    let foundMonstro = this.monstros.find((mItem) => mItem.monstroItem.id === monstro.id)
    if(foundMonstro){
      foundMonstro.quantity = foundMonstro.quantity + 1
    } else {
      this.monstros.push(new Combate(monstro))
    }
  }

  removeMonstro(monstro:Combate){
    this.monstros.splice(this.monstros.indexOf(monstro), 1)
  }

  dificuldade(): number{
    return this.monstros
      .map(item => item.dificuldade())
      .reduce((prev, value) => prev + value, 0)
  }
}
