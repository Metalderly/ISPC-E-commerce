import { Component } from '@angular/core';
import { ProductsService } from 'src/app/services/products.service';
import { Product } from 'src/app/ecommerce/models/product.model';
import { Router } from '@angular/router';

@Component({
  selector: 'app-shop',
  templateUrl: './shop.component.html',
  styleUrls: ['./shop.component.css']
})
export class ShopComponent {
  constructor(private productsService: ProductsService, private router: Router){
  }
  listProducts: Product[] = []

  ngOnInit(){
    this.productsService.getAllProducts().subscribe(el => {
      this.listProducts = el
    })
  }

  clickSection(id: number){
    this.router.navigate([`shop/product/${id}`])
  }
}