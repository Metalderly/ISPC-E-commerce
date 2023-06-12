import { Injectable } from '@angular/core';
import { Product, ProductRequest } from '../ecommerce/models/product.model';
import { Category } from '../ecommerce/models/category.enum';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {

  constructor(private http: HttpClient) { }

  listProducts: Product[] = []

  getAllProducts(){
    return this.http.get<Product[]>("http://localhost:8000/v1/products")
  }
  addProduct(product: ProductRequest){
    return this.http.post<string>("http://localhost:8000/v1/products", product)
  }
  updateProduct(product: Product){
    return this.http.put<Product>(`http://localhost:8000/v1/product/${product.id}`, {
      id:product.id,
      producto:product.producto,
      image:product.image,
      tipo:product.tipo,
      caracteristicas:product.caracteristicas,
      precio:product.precio,
      vendedor: product.vendedor.id
    })
  }
  getProductsByUsername(username: string){
    return this.http.get<Product[]>(`http://localhost:8000/v1/products/${username}`)
  }
  getProductById(id: number){
    return this.http.get<Product>(`http://localhost:8000/v1/product/${id}`)
  }
  deleteProduct(id: number){
    return this.http.delete(`http://localhost:8000/v1/product/${id}`)
  }
  getCategories(){
    return this.http.get('http://localhost:8000/v1/categories')
  }
}
