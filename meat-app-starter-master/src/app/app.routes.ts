import { Routes } from "@angular/router";
import { HomeComponent } from "./home/home.component";
import { JogadorComponent } from "./jogador/jogador.component";
import { RestaurantsComponent } from "./restaurants/restaurants.component";
import { RestaurantDetailComponent } from "./restaurant-detail/restaurant-detail.component";
import { DetalheCombateComponent } from "./jogador/detalhe-combate/detalhe-combate.component";
import { MenuComponent } from "./restaurant-detail/menu/menu.component";
import { ReviewsComponent } from "./restaurant-detail/reviews/reviews.component";
import { MochilaComponent } from "./jogador/detalhe-combate/mochila/mochila.component";
import { ListaMonstroComponent } from "./jogador/detalhe-combate/lista-monstro/lista-monstro.component";
import { OrderComponent } from "./order/order.component";
import { OrderSumaryComponent } from "./order-sumary/order-sumary.component";


export const ROUTES: Routes = [
  {path: '', component: HomeComponent},
  {path: 'about', loadChildren: './about/about.module#AboutModule'},
  {path: 'restaurants', component: RestaurantsComponent},
  {path: 'restaurants/:id', component: RestaurantDetailComponent,
    children: [
      {path: '', redirectTo: 'menu', pathMatch: 'full'},
      {path: 'menu', component: MenuComponent},
      {path: 'reviews', component: ReviewsComponent},
    ]},
  {path: 'order', component: OrderComponent},
  {path: 'order-sumary', component: OrderSumaryComponent},

  {path: 'jogador', component: JogadorComponent},
  {path: 'monstros/:id', component: DetalheCombateComponent,
  children: [
    {path: '', redirectTo: 'lista', pathMatch: 'full'},
    {path: 'lista', component: ListaMonstroComponent},
    {path: 'mochila', component: MochilaComponent},
  ]},
]
