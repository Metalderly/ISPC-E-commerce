import { Category } from "./category.enum"

export interface Product{
  id: number
  name: string
  description: string
  price: number
  image: string
  seller: string
  category: Category
}

