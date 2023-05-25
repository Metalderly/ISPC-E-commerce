import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Product } from 'src/app/ecommerce/models/product.model';
import { ProductsService } from 'src/app/services/products.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent{
  constructor(private productsService: ProductsService, private router: Router){}

  products: Product[] = []
  ngOnInit(){
    this.productsService.getProductBySeller("Mick Jagger").subscribe(el => {
      this.products = el
    })
  }

  clickSection(id: number){
    this.router.navigate([`shop/product/${id}`])
  }
}
