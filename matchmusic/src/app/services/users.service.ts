import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { UserRequest, User } from '../authentication/models/user.model';
import { BehaviorSubject, catchError, throwError } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UsersService {
  constructor(private http: HttpClient) { }

  getUsers(){
    return this.http.get<User[]>("http://localhost:8000/v1/users")
  }
  userByUsernameAndPassword(username: string, password:string) {
    return this.http.get<User>("http://localhost:8000/v1/user/"+username+"/"+password)
  }
  userByUsername(username: string) {
    return this.http.get<User>("http://localhost:8000/v1/user/"+username)
  }
  userById(id: number) {
    return this.http.get<User>("http://localhost:8000/v1/user/"+id)
  }
  postUser(user: UserRequest){
    return this.http.post<string>("http://localhost:8000/v1/users", user)
  }
}
