import { Injectable } from '@angular/core';
import { Product } from '../ecommerce/models/product.model';
import { BehaviorSubject } from "rxjs"
import { Category } from '../ecommerce/models/category.enum';

@Injectable({
  providedIn: 'root'
})
export class CartService {

  constructor() { }
  listProducts: Map<string, number[]> = new Map()
  listObservable = new BehaviorSubject<Map<string, number[]>>(new Map())
  $listObservable = this.listObservable.asObservable()

  quantityOfProducts: number = 0
  quantityObservable = new BehaviorSubject<number>(0)
  $quantyObservable = this.quantityObservable.asObservable()

  addProduct(product: Product){
    if(this.listProducts.has(product.name)){
      this.listProducts.set(product.name, [
        Number(this.listProducts.get(product.name)!![0])+product.price,
        Number(this.listProducts.get(product.name)!![1])+1
      ])
    } else {
      this.listProducts.set(product.name,[product.price, 1])
    }
    this.listObservable.next(this.listProducts)
  }

  quantityProducts(){
    let quantity = 0
    for(let item of this.listProducts.values()){
      quantity+=item[1]
    }
    this.quantityOfProducts=quantity
    this.quantityObservable.next(this.quantityOfProducts)
  }
}
