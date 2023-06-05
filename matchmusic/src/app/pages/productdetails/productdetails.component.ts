import { Component } from '@angular/core';
import { ProductsService } from 'src/app/services/products.service';
import { Product } from '../../ecommerce/models/product.model';
import { Category } from '../../ecommerce/models/category.enum';
import { ActivatedRoute, Router } from '@angular/router';
import { CartService } from 'src/app/services/cart.service';
import { UsersService } from 'src/app/services/users.service';

@Component({
  selector: 'app-productdetails',
  templateUrl: './productdetails.component.html',
  styleUrls: ['./productdetails.component.css']
})
export class ProductdetailsComponent {
  constructor(private productsService: ProductsService, private router: ActivatedRoute, private navigate: Router, private cartService: CartService, private userService: UsersService){
  }

  product: Product = {
    id:0,
    producto:'',
    image:'',
    tipo:Category.Accesorios,
    caracteristicas:'',
    precio:0,
    vendedor: ''
  }

  ngOnInit(){
    this.userService.$userConnected.subscribe(data => {
      if(data.username==''){
        this.navigate.navigate(['/login'])
      }
    })
    this.productsService.getProductById(this.router.snapshot.params['id']).subscribe(el => {
      this.product = el
    })
  }

  addCart(product: Product){
    this.cartService.addProduct(product)
    this.cartService.quantityProducts()
  }
}
