import { Routes } from "@angular/router";
import { AboutComponent } from "./about/about.component";
import { HomeComponent } from "./home/home.component";
import { JogadorComponent } from "./jogador/jogador.component";
import { RestaurantsComponent } from "./restaurants/restaurants.component";
import { RestaurantDetailComponent } from "./restaurant-detail/restaurant-detail.component";
import { DetalheCombateComponent } from "./jogador/detalhe-combate/detalhe-combate.component";


export const ROUTES: Routes = [
  {path: '', component: HomeComponent},
  {path: 'about', component: AboutComponent},
  {path: 'restaurants', component: RestaurantsComponent},
  {path: 'restaurants/:id', component: RestaurantDetailComponent},

  {path: 'jogador', component: JogadorComponent},
  {path: 'monstros/:id', component: DetalheCombateComponent}
]
