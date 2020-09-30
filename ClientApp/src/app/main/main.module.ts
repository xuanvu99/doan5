import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MainRoutingModule } from './main-routing.module';
import { SlideComponent } from "../share/slide/slide.component";
import { LoginComponent } from '../auth/login/login.component';
import { CheckoutComponent } from './checkout/checkout.component';
import { ConfirmationComponent } from './confirmation/confirmation.component';
import { DeliveryMethodComponent } from './delivery-method/delivery-method.component';
import { DetailProductComponent } from './detail-product/detail-product.component';
import { HomeComponent } from './home/home.component';
import { ListProductComponent } from './list-product/list-product.component';
import { MainListComponent } from "./list-product/main-list/main-list.component";
import { MainComponent } from './main.component';
import { PaymentMethodComponent } from './payment-method/payment-method.component';
import { ShoppingCartComponent } from './shopping-cart/shopping-cart.component';


@NgModule({
  declarations: [
    SlideComponent,
    LoginComponent,
    CheckoutComponent,
    ConfirmationComponent,
    DeliveryMethodComponent,
    DetailProductComponent,
    HomeComponent,
    ListProductComponent,
    MainListComponent,
    MainComponent,
    PaymentMethodComponent,
    ShoppingCartComponent
  ],
  imports: [
    CommonModule,
    MainRoutingModule
  ]
})
export class MainModule { }
