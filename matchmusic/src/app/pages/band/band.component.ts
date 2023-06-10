import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Product } from 'src/app/ecommerce/models/product.model';
import { ProductsService } from 'src/app/services/products.service';
import { UsersService } from 'src/app/services/users.service';

@Component({
  selector: 'app-band',
  templateUrl: './band.component.html',
  styleUrls: ['./band.component.css']
})
export class BandComponent {
  constructor(private productsService: ProductsService, private router: Router, private userService: UsersService){}

  products: Product[] = []
  username = JSON.parse(localStorage.getItem('username')!!)

  ngOnInit(){
    this.productsService.getProductsByUsername(this.username[0]).subscribe(el => {
      this.products = el
    })
  }
  clickSection(id: number){
    this.router.navigate([`shop/product/${id}`])
  }
}
