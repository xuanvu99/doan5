import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MainRoutingModule } from './main-routing.module';
import { HomeComponent } from './home/home.component';
import { ListProductComponent } from './list-product/list-product.component';
import { ProductDetailComponent } from './product-detail/product-detail.component';
import { CartComponent } from './cart/cart.component';
import { CheckoutComponent } from './checkout/checkout.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';


@NgModule({
  declarations: [HomeComponent, ListProductComponent, ProductDetailComponent, CartComponent, CheckoutComponent, LoginComponent, RegisterComponent],
  imports: [
    CommonModule,
    MainRoutingModule
  ]
})
export class MainModule { }
