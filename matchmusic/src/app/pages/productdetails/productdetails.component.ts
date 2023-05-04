import { Component } from '@angular/core';
import { ProductsService } from 'src/app/services/products.service';
import { Product } from '../../ecommerce/models/product.model';
import { Category } from '../../ecommerce/models/category.enum';
import { ActivatedRoute } from '@angular/router';
import { CartService } from 'src/app/services/cart.service';

@Component({
  selector: 'app-productdetails',
  templateUrl: './productdetails.component.html',
  styleUrls: ['./productdetails.component.css']
})
export class ProductdetailsComponent {
  constructor(private productsService: ProductsService, private router: ActivatedRoute, private cartService: CartService){
  }

  product: Product = {
    id:0,
    name:'',
    description:'',
    image:'',
    price:0,
    seller:'',
    category:Category.Entradas
  }

  ngOnInit(){
    this.product = this.productsService.getProductById(this.router.snapshot.params['id'])!!
  }

  addCart(product: Product){
    this.cartService.addProduct(product)
    this.cartService.quantityProducts()
  }
}
