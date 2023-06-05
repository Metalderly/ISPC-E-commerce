import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { User } from 'src/app/authentication/models/user.model';
import { Product } from 'src/app/ecommerce/models/product.model';
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
  ngOnInit(){
    this.userService.$userConnected.subscribe(data => {
      if(data.username==''){
        this.router.navigate(['/login'])
      } else {
        this.userConnected=data
        this.productsService.getProductsByUsername(data.username).subscribe(el => {
          this.products = el
        })
      }

    })
  }
  clickSection(id: number){
    this.router.navigate([`shop/product/${id}`])
  }
}
