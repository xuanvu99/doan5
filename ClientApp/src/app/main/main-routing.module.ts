import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from '../auth/login/login.component';
import { CheckoutComponent } from './checkout/checkout.component';
import { ConfirmationComponent } from './confirmation/confirmation.component';
import { DeliveryMethodComponent } from './delivery-method/delivery-method.component';
import { DetailProductComponent } from './detail-product/detail-product.component';
import { HomeComponent } from './home/home.component';
import { ListProductComponent } from './list-product/list-product.component';
import { MainComponent } from './main.component';
import { PaymentMethodComponent } from './payment-method/payment-method.component';
import { ShoppingCartComponent } from './shopping-cart/shopping-cart.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'trang-chu',
    pathMatch: 'full',
  },
  {
    path: '',
    component: MainComponent,
    children: [
      { path: 'trang-chu', component: HomeComponent },
      { path: 'danh-sach', component: ListProductComponent },
      { path: 'chi-tiet', component: DetailProductComponent },
      { path: 'gio-hang', component: ShoppingCartComponent },
      { path: 'phuong-thuc-thanh-toan', component: PaymentMethodComponent },
      { path: 'phuong-thuc-giao-hang', component: DeliveryMethodComponent },
      { path: 'xac-thuc-don-hang', component: ConfirmationComponent },
      { path: 'dat-hang-thanh-cong', component: CheckoutComponent },
      { path: 'dang-nhap-dang-ky', component: LoginComponent }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MainRoutingModule { }
