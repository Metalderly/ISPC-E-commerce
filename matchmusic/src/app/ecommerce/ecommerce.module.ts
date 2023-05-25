import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductsComponent } from './products/products.component';
import { CartComponent } from './cart/cart.component';
import { ProductComponent } from './product/product.component';

@NgModule({
  declarations: [
    ProductsComponent,
    CartComponent,
    ProductComponent,
  ],
  imports: [
    CommonModule,
  ],
  exports: [ProductComponent, ProductsComponent, CartComponent],
})
export class EcommerceModule { }
