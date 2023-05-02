import { Injectable } from '@angular/core';
import { Product } from '../ecommerce/models/product.model';
import { BehaviorSubject } from "rxjs"
import { Category } from '../ecommerce/models/category.enum';

@Injectable({
  providedIn: 'root'
})
export class CartService {

  constructor() { }
  listProducts: Map<string, number> = new Map()
  listObservable = new BehaviorSubject<Map<string, number>>(new Map())
  $listObservable = this.listObservable.asObservable()

  addProduct(product: Product){
    if(this.listProducts.has(product.name)){
      this.listProducts.set(product.name, Number(this.listProducts.get(product.name))+product.price)
    } else {
      this.listProducts.set(product.name,product.price)
    }
    this.listObservable.next(this.listProducts)
  }
}
