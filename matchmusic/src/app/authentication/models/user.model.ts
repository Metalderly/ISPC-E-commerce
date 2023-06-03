export interface User{
  username: string
  email: string
  password: string
  first_name: string
  last_name: string
  country: string
  province: string
  city: string
  gender: string
}

export interface UserRequest extends Omit<User, "country"|"province"|"city"|"gender">{}
