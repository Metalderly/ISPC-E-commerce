import { Component } from '@angular/core';
import { ProductsService } from 'src/app/services/products.service';
import { Product } from 'src/app/ecommerce/models/product.model';
import { Router } from '@angular/router';
import { UsersService } from 'src/app/services/users.service';

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
  flagProduct: boolean = false
  username = JSON.parse(localStorage.getItem('username')!!)

  ngOnInit(){
    this.productsService.getAllProducts().subscribe(el => {
      this.listProducts = el
    })
    this.productsService.getProductsByUsername(this.username.username).subscribe(data => {
      this.listMeProducts = data
    })
  }
  clickSection(id: number){
    this.router.navigate([`shop/product/${id}`])
  }
  clickProducts(){
    this.flagProduct = !this.flagProduct
  }
}
