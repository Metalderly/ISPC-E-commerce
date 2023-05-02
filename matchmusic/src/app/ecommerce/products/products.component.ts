import { Component } from '@angular/core';
import { Product } from '../models/product.model';
import { Category } from '../models/category.enum';
import { CartService } from 'src/app/services/cart.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent {
  constructor(private cartService: CartService){}
    products: Product[] = [{
      id:1,
      name:'Entrada Show en Luna Park',
      description:'Estamos vendiendo entradas para nuestro proximo show...',
      image:'https://thumbs.dreamstime.com/b/dise%C3%B1o-de-plantilla-entradas-entrada-concetos-musicales-con-forma-instrumento-musical-cuerdas-onda-fluida-abstracta-en-concet-184310983.jpg',
      price:1000,
      seller:'Mick Jagger',
      category:Category.Entradas
    },
    {
      id:2,
      name:'Guitarra Acústica',
      description:'Guitarra usada marca Yamaha. Buen estado.',
      image:'https://images.unsplash.com/photo-1510915361894-db8b60106cb1?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NHx8Z3VpdGFyJTIwYWNvdXN0aWN8ZW58MHx8MHx8&w=1000&q=80',
      price:4374,
      seller:'Mick Jagger',
      category:Category.Instrumentos
    },
    {
      id:3,
      name:'Mi ultimo disco como solista',
      description:'Ya está a la venta mi ultimo disco como solista.',
      image:'https://c8.alamy.com/compes/2em6f6x/discos-de-vinilo-y-reproductor-de-musica-discoteca-partido-vector-diseno-discos-de-vinilo-o-discos-lp-con-notas-musicales-y-dj-tocadiscos-retro-del-club-de-baile-en-2em6f6x.jpg',
      price:556,
      seller:'Mick Jagger',
      category:Category.Discos
    }
  ]

  addCart(product: Product){
    this.cartService.addProduct(product)
  }
}
