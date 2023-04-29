import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductsComponent } from './products/products.component';
import { CartComponent } from './cart/cart.component';
import { ProductComponent } from './product/product.component';
import { ProductdetailsComponent } from './productdetails/productdetails.component';



@NgModule({
  declarations: [
    ProductsComponent,
    CartComponent,
    ProductComponent,
    ProductdetailsComponent
  ],
  imports: [
    CommonModule
  ]
})
export class EcommerceModule { }
