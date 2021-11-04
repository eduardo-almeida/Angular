import { BrowserModule } from '@angular/platform-browser';
import { NgModule, LOCALE_ID } from '@angular/core';
import { HttpModule } from '@angular/http';
import { RouterModule, PreloadAllModules } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'

import { ROUTES } from './app.routes';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { HomeComponent } from './home/home.component';
import { RestaurantsComponent } from './restaurants/restaurants.component';
import { RestaurantComponent } from './restaurants/restaurant/restaurant.component';
import { JogadorComponent } from './jogador/jogador.component';
import { MonstroComponent } from './jogador/monstro/monstro.component';
import { JogadorService } from './jogador/jogador.service';
import { RestaurantDetailComponent } from './restaurant-detail/restaurant-detail.component';
import { MenuComponent } from './restaurant-detail/menu/menu.component';
import { ShoppingCartComponent } from './restaurant-detail/shopping-cart/shopping-cart.component';
import { MenuItemComponent } from './restaurant-detail/menu-item/menu-item.component';
import { DetalheCombateComponent } from './jogador/detalhe-combate/detalhe-combate.component';
import { CombateComponent } from './jogador/detalhe-combate/combate/combate.component';
import { ListaMonstroComponent } from './jogador/detalhe-combate/lista-monstro/lista-monstro.component';
import { ReviewsComponent } from './restaurant-detail/reviews/reviews.component';
import { MochilaComponent } from './jogador/detalhe-combate/mochila/mochila.component';
import { MonstroItemComponent } from './jogador/detalhe-combate/monstro-item/monstro-item.component'
import { CombateService} from './jogador/detalhe-combate/combate/combate.service';
import { OrderSumaryComponent } from './order-sumary/order-sumary.component';
import { SharedModule } from './shared/shared.module';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    HomeComponent,
    RestaurantsComponent,
    RestaurantComponent,
    JogadorComponent,
    MonstroComponent,
    RestaurantDetailComponent,
    MenuComponent,
    ShoppingCartComponent,
    MenuItemComponent,
    DetalheCombateComponent,
    CombateComponent,
    ListaMonstroComponent,
    ReviewsComponent,
    MochilaComponent,
    MonstroItemComponent,
    OrderSumaryComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    HttpModule,
    SharedModule.forRoot(),
    RouterModule.forRoot(ROUTES, {preloadingStrategy:PreloadAllModules})
  ],
  providers: [ JogadorService, CombateService, {provide: LOCALE_ID, useValue: 'pt-BR'}],
  bootstrap: [AppComponent]
})
export class AppModule { }
