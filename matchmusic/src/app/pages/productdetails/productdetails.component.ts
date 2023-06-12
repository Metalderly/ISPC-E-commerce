import { Component } from '@angular/core';
import { ProductsService } from 'src/app/services/products.service';
import { Product } from '../../ecommerce/models/product.model';
import { User } from 'src/app/authentication/models/user.model';
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

  flagProduct: boolean = false
  flagUpdateProduct: boolean = false
  categories: any = []
  username = JSON.parse(localStorage.getItem('username')!!)
  valueDefault = 'Seleccione una categoria'
  product: Product = {
    id:0,
    producto:'',
    image:'',
    tipo:Category.Accesorios,
    caracteristicas:'',
    precio:0,
    vendedor: {
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
  userConnected = JSON.parse(localStorage.getItem("username")!!)
  flagProductUserConnected: boolean = false

  ngOnInit(){
    this.productsService.getProductById(this.router.snapshot.params['id']).subscribe(el => {
      this.product = el
      this.userService.userById(Number(el.vendedor)).subscribe(data => {
        this.product.vendedor = data
        if(data.username == this.userConnected.username){
          this.flagProductUserConnected = true
        }
      })
    })
    this.productsService.getCategories().subscribe(data => {
      this.categories = data
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

  updateProduct(){
    this.productsService.updateProduct(this.product).subscribe(el=>{
      this.product = el
      this.userService.userById(Number(el.vendedor)).subscribe(data => {
        this.product.vendedor = data
      })
    })
    this.flagUpdateProduct = false
  }
  clickUpdateProduct(){
    this.flagUpdateProduct = !this.flagUpdateProduct
  }
}
