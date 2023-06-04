export interface User{
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

export interface UserRequest extends Omit<User, "pais"|"provincia"|"ciudad"|"genero">{}
