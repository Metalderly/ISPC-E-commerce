import { Injectable } from '@angular/core';
import { Product } from '../ecommerce/models/product.model';
import { Category } from '../ecommerce/models/category.enum';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {

  constructor() { }

  listProducts: Product[] = [
    {
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
    },
    {
      id:4,
      name:'Entrada Show en Luna Park',
      description:'Estamos vendiendo entradas para nuestro proximo show...',
      image:'https://thumbs.dreamstime.com/b/dise%C3%B1o-de-plantilla-entradas-entrada-concetos-musicales-con-forma-instrumento-musical-cuerdas-onda-fluida-abstracta-en-concet-184310983.jpg',
      price:1000,
      seller:'Mick Jagger',
      category:Category.Entradas
    },
    {
      id:5,
      name:'Guitarra Acústica',
      description:'Guitarra usada marca Yamaha. Buen estado.',
      image:'https://images.unsplash.com/photo-1510915361894-db8b60106cb1?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NHx8Z3VpdGFyJTIwYWNvdXN0aWN8ZW58MHx8MHx8&w=1000&q=80',
      price:4374,
      seller:'Mick Jagger',
      category:Category.Instrumentos
    },
    {
      id:6,
      name:'Mi ultimo disco como solista',
      description:'Ya está a la venta mi ultimo disco como solista.',
      image:'https://c8.alamy.com/compes/2em6f6x/discos-de-vinilo-y-reproductor-de-musica-discoteca-partido-vector-diseno-discos-de-vinilo-o-discos-lp-con-notas-musicales-y-dj-tocadiscos-retro-del-club-de-baile-en-2em6f6x.jpg',
      price:556,
      seller:'Mick Jagger',
      category:Category.Discos
    }
  ]

  getProductById(id_product: number){
    return this.listProducts.find(el => el.id==id_product)
  }

  getAllProducts(){
    return this.listProducts
  }
}
