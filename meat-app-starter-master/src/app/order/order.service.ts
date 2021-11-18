import { Injectable } from "@angular/core";
import { CartItem } from "app/restaurant-detail/shopping-cart/cart-item.model";
import { ShoppingCartService } from "app/restaurant-detail/shopping-cart/shopping-cart.service";
import { Observable } from "rxjs/Observable";
import { Order, OrderItem } from "./order.model";

import 'rxjs/add/operator/map'
import { HttpClient } from "@angular/common/http";
import { MEAT_API } from "app/app.api";

@Injectable()
export class OrderService{
  constructor(private cartService: ShoppingCartService,
              private http: HttpClient){}

  cartItems(): CartItem[] {
    return this.cartService.itens
  }

  increaseQty(item: CartItem){
    this.cartService.increaseQty(item)
  }

  decreaseQty(item: CartItem){
    this.cartService.decreaseQty(item)
  }

  remove(item: CartItem){
    this.cartService.removeItem(item)
  }

  itemsValue(): number {
    return this.cartService.total()
  }


  clear(){
    this.cartService.clear()
  }

  checkOrder(order:Order): Observable<string>{
    return this.http.post<Order>(`${MEAT_API}/orders`, order)
                    .map(order => order.id)
  }

}
