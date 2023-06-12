import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { User } from 'src/app/authentication/models/user.model';
import { Category } from 'src/app/ecommerce/models/category.enum';
import { Product, ProductRequest } from 'src/app/ecommerce/models/product.model';
import { ProductsService } from 'src/app/services/products.service';
import { UsersService } from 'src/app/services/users.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent{
  constructor(private productsService: ProductsService, private router: Router, private userService: UsersService){}

  userConnected: User = {
    'id':0,
    'username':'',
    'email':'',
    'password':'',
    'first_name':'',
    'last_name': '',
    'pais':'',
    'provincia':'',
    'ciudad':'',
    'genero':''
  }
  products: Product[] = []
  categories: any = []
  flagProduct: boolean = false
  flagAddProduct: boolean = false
  username = JSON.parse(localStorage.getItem('username')!!)
  new_product: ProductRequest = {
    'producto':'',
    'image':'',
    'caracteristicas':'',
    'tipo': Category.Accesorios,
    'precio': 0,
    'vendedor': {
      'id':0,
      'username':'',
      'email':'',
      'first_name': '',
      'last_name': '',
      'password': '',
      'pais':'',
      'provincia':'',
      'ciudad':'',
      'genero':''
    }
  }
  valueDefault = 'Seleccione una categoria'

  ngOnInit(){
    this.userConnected = this.username
    this.productsService.getProductsByUsername(this.username.username).subscribe(el => {
      this.products = el
    })
    this.productsService.getCategories().subscribe(data => {
      this.categories = data
    })
    this.userService.userByUsername(this.username.username).subscribe(data => {
      this.new_product.vendedor = data
    })
  }
  clickSection(id: number){
    this.router.navigate([`shop/product/${id}`])
  }
  addProduct(){
    this.productsService.addProduct(this.new_product).subscribe(el=>{
      this.productsService.getAllProducts().subscribe(el => {
        this.products = el
      })
    })
    this.flagAddProduct = false
  }
  clickNewProduct(){
    this.flagAddProduct = !this.flagAddProduct
  }
}
