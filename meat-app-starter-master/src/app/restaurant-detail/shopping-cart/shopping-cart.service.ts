import { Injectable } from "@angular/core"

import { NotificationService } from "app/shared/messages/notifications.service"
import { MenuItem } from "../menu-item/menu-item.model"
import { CartItem } from "./cart-item.model"

@Injectable()
export class ShoppingCartService{
  itens: CartItem[] = []

  constructor(private notificationService: NotificationService){}

  clear(){
    this.itens = []
  }

  addItem(item:MenuItem){
    let foundItem = this.itens.find((mItem)=> mItem.menuItem.id === item.id)
    if(foundItem){
      this.increaseQty(foundItem)
    } else {
      this.itens.push(new CartItem(item))
    }
    this.notificationService.notify(`Você adcionou o item ${item.name}`)
  }

  removeItem(item:CartItem){
    this.itens.splice(this.itens.indexOf(item), 1)
    this.notificationService.notify(`Você removeu o item ${item.menuItem.name}`)
  }

  increaseQty(item: CartItem){
    item.quantity = item.quantity +1
  }

  decreaseQty(item: CartItem){
    item.quantity = item.quantity -1
    if(item.quantity === 0){
      this.removeItem(item)
    }
  }

  total(): number {
    return this.itens
      .map(item => item.value())
      .reduce((prev, value) => prev + value, 0)
  }
}
