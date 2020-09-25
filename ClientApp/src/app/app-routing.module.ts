import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './auth/login/login.component';
import { CheckoutComponent } from './checkout/checkout.component';
import { ConfirmationComponent } from './confirmation/confirmation.component';
import { DeliveryMethodComponent } from './delivery-method/delivery-method.component';
import { DetailProductComponent } from './detail-product/detail-product.component';
import { HomeComponent } from './home/home.component';
import { ListProductComponent } from './list-product/list-product.component';
import { PaymentMethodComponent } from './payment-method/payment-method.component';
import { LayoutComponent } from './share/layout/layout.component';
import { ShoppingCartComponent } from './shopping-cart/shopping-cart.component';

const routes: Routes = [
  {
    path: '',
    component: LayoutComponent,
    children: [
      {
        path: '',
        redirectTo: 'trang-chu.html',
        pathMatch: 'full',
      },
      { path: 'trang-chu.html', component: HomeComponent },
      { path: 'danh-sach', component: ListProductComponent },
      { path: 'chi-tiet', component: DetailProductComponent },
      { path: 'gio-hang.html', component: ShoppingCartComponent },
      { path: 'phuong-thuc-thanh-toan.html', component: PaymentMethodComponent },
      { path: 'phuong-thuc-giao-hang.html', component: DeliveryMethodComponent },
      { path: 'xac-thuc-don-hang.html', component: ConfirmationComponent },
      { path: 'dat-hang-thanh-cong.html', component: CheckoutComponent },
      { path: 'dang-nhap-dang-ky.html', component: LoginComponent }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
