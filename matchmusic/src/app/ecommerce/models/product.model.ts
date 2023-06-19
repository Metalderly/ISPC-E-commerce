import { User } from "src/app/authentication/models/user.model"
import { Category } from "./category.enum"

export interface Product{
  id: number
  producto: string
  image: string
  tipo: Category
  caracteristicas: string
  precio: number
  vendedor: User
}

export interface ProductRequest extends Omit<Product, 'id'>{
}

