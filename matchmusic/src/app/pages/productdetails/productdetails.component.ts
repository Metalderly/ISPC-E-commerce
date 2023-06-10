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
    vendedor: 0
  }
  userConnected = JSON.parse(localStorage.getItem("username")!!)
  flagProductUserConnected: boolean = false

  ngOnInit(){
    this.productsService.getProductById(this.router.snapshot.params['id']).subscribe(el => {
      this.product = el

      this.userService.userById(Number(this.product.vendedor)).subscribe(data => {
        this.product.vendedor = data.id
        if(data.username == this.userConnected.username){
          this.flagProductUserConnected = true
        }
      })
    })

  }
  addCart(product: Product){
    this.cartService.addProduct(product)
    this.cartService.quantityProducts()
  }
  deleteProduct(id: number){
    this.productsService.deleteProduct(id).subscribe(el =>{
      this.navigate.navigate(['/shop'])
    })
  }
}
