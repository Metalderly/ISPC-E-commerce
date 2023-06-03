import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { UserRequest, User } from '../authentication/models/user.model';
import { catchError, throwError } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UsersService {
  constructor(private http: HttpClient) { }

  getUsers(){
    return this.http.get<User[]>("http://localhost:8000/v1/users")
  }
  userByUsername(username: string) {
    return this.http.get<User>("http://localhost:8000/v1/user/"+username)
  }
  userByEmail(email: string) {
    return this.http.get<User>("http://localhost:8000/v1/user/"+email)
  }
  postUser(user: UserRequest){
    return this.http.post<string>("http://localhost:8000/v1/users", user)
  }
}
