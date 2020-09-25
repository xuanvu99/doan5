import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { LayoutComponent } from "./share/layout/layout.component";
import { SlideComponent } from "./share/slide/slide.component";
import { ListProductComponent } from './list-product/list-product.component';
import { MainListComponent } from "./list-product/main-list/main-list.component";
import { DetailProductComponent } from './detail-product/detail-product.component';
import { ShoppingCartComponent } from './shopping-cart/shopping-cart.component';
import { PaymentMethodComponent } from "./payment-method/payment-method.component";
import { DeliveryMethodComponent } from './delivery-method/delivery-method.component';
import { ConfirmationComponent } from './confirmation/confirmation.component';
import { CheckoutComponent } from './checkout/checkout.component';
import { LoginComponent } from './auth/login/login.component';

@NgModule({
  declarations: [
    AppComponent,
    LayoutComponent,
    HomeComponent,
    SlideComponent,
    ListProductComponent,
    MainListComponent,
    DetailProductComponent,
    ShoppingCartComponent,
    PaymentMethodComponent,
    DeliveryMethodComponent,
    ConfirmationComponent,
    CheckoutComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
