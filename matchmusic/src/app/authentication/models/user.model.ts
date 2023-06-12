export interface User{
  id: number,
  username: string
  email: string
  password: string
  first_name: string
  last_name: string
  pais: string
  provincia: string
  ciudad: string
  genero: string
}

export interface UserRequest extends Omit<User, "id"|"pais"|"provincia"|"ciudad"|"genero">{}
