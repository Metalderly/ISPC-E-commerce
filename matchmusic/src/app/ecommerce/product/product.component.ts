import { Component, OnInit, Input } from '@angular/core';
import { Product } from '../models/product.model';
import { Category } from '../models/category.enum';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {
  @Input() product: Product = {
    id:0,
    producto:'',
    caracteristicas:'',
    image:'',
    precio:0,
    vendedor:0,
    tipo:Category.Accesorios
  }

  ngOnInit(){
  }
}
