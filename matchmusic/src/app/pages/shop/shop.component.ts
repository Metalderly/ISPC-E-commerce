import { Component } from '@angular/core';
import { ProductsService } from 'src/app/services/products.service';
import { Product, ProductRequest } from 'src/app/ecommerce/models/product.model';
import { Router } from '@angular/router';
import { UsersService } from 'src/app/services/users.service';
import { Category } from 'src/app/ecommerce/models/category.enum';

@Component({
  selector: 'app-shop',
  templateUrl: './shop.component.html',
  styleUrls: ['./shop.component.css']
})
export class ShopComponent {
  constructor(private productsService: ProductsService, private router: Router, private userService: UsersService){
  }
  listProducts: Product[] = []
  listMeProducts: Product[] = []
  categories: any = []
  flagProduct: boolean = false
  username = JSON.parse(localStorage.getItem('username')!!)
  new_product: ProductRequest = {
    'producto':'',
    'image':'',
    'caracteristicas':'',
    'tipo': Category.Accesorios,
    'precio': 0,
    'vendedor': 0
  }
  valueDefault = 'Seleccione una categoria'

  ngOnInit(){
    this.productsService.getAllProducts().subscribe(el => {
      this.listProducts = el
    })
    this.productsService.getProductsByUsername(this.username.username).subscribe(data => {
      this.listMeProducts = data
    })
    this.productsService.getCategories().subscribe(data => {
      this.categories = data
    })
    this.userService.userByUsername(this.username.username).subscribe(data => {
      this.new_product.vendedor = data.id
    })
  }
  clickSection(id: number){
    this.router.navigate([`shop/product/${id}`])
  }
  clickProducts(){
    this.flagProduct = !this.flagProduct
  }
  addProduct(){
    this.productsService.addProduct(this.new_product).subscribe(el=>{})
  }
}
