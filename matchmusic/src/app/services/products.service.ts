import { Injectable } from '@angular/core';
import { Product } from '../ecommerce/models/product.model';
import { Category } from '../ecommerce/models/category.enum';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {

  constructor(private http: HttpClient) { }

  listProducts: Product[] = []

  getAllProducts(){
    return this.http.get<Product[]>("http://localhost:3000/products")
  }
  getProductById(id_product: number){
    return this.http.get<Product>(`http://localhost:3000/products/${id_product}`)
  }
  getProductByCategory(category: string){
    return this.http.get<Product[]>("http://localhost:3000/products", {params: {"category":category}})
  }
  getProductBySeller(seller: string){
    return this.http.get<Product[]>("http://localhost:3000/products", {params: {"seller":seller}})
  }
}
