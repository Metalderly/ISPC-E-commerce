import { Component } from '@angular/core';
import { Product } from '../models/product.model';
import { Category } from '../models/category.enum';
import { CartService } from 'src/app/services/cart.service';
import { ProductsService } from 'src/app/services/products.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent {
  constructor(private productsService: ProductsService){
    this.products = this.productsService.listProducts
  }

  products: Product[] = []

}
