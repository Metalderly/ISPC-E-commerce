import { Component } from '@angular/core';
import { Product } from '../models/product.model';
import { CartService } from 'src/app/services/cart.service';
import { Category } from '../models/category.enum';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent {
  constructor(private cartService: CartService){
  }
  counter_cart: number|string = ''
  listProducts: Map<string, number> = new Map
  visibilityCart: boolean = false

  ngOnInit(){
    this.cartService.listObservable.subscribe(data => {
      this.counter_cart = data.size
      this.listProducts = data
    })
  }

  toggleCart(){
    this.visibilityCart = !this.visibilityCart
  }
}
