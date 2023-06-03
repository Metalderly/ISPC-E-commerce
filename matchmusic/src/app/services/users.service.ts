import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { UserRequest, User } from '../authentication/models/user.model';
import { BehaviorSubject, catchError, throwError } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UsersService {
  constructor(private http: HttpClient) { }

  userConnected = new BehaviorSubject<User>({
    'username':'',
    'email':'',
    'password':'',
    'first_name':'',
    'last_name': '',
    'country':'',
    'province':'',
    'city':'',
    'gender':''
  })
  $userConnected = this.userConnected.asObservable()

  getUsers(){
    return this.http.get<User[]>("http://localhost:8000/v1/users")
  }
  userByUsername(username: string, password:string) {
    return this.http.get<User>("http://localhost:8000/v1/user/"+username+"/"+password)
  }
  postUser(user: UserRequest){
    return this.http.post<string>("http://localhost:8000/v1/users", user)
  }
}
