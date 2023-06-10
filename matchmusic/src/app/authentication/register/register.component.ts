import { Component } from '@angular/core';
import { FormGroup, FormControl, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { UsersService } from 'src/app/services/users.service';
import { UserRequest } from '../models/user.model';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {
  constructor(private formBuilder: FormBuilder, private userService: UsersService, private router: Router){}

  errorRegister: string = ''
  registerForm: FormGroup = new FormGroup({});
  user: UserRequest = {
    'username':'',
    'email':'',
    'first_name': '',
    'last_name': '',
    'password': ''
  }

  ngOnInit(){
    this.registerForm = this.formBuilder.group({
      first_name: ['', [Validators.required]],
      last_name: ['', [Validators.required]],
      username: ['', [Validators.required, Validators.minLength(5)]],
      password: ['', [Validators.required, Validators.minLength(5),Validators.maxLength(16)]],
      email: ['', [Validators.required, Validators.email]]
    });
  }

  registerSubmited(){
    this.user = {
      'username':this.registerForm.value["username"],
      'email':this.registerForm.value["email"],
      'password':this.registerForm.value["password"],
      'first_name':this.registerForm.value["first_name"],
      'last_name': this.registerForm.value["last_name"],
    }
    this.userService.postUser(this.user).subscribe(data => {
      if(data=="[object Object]"){
        this.router.navigate(["/login"])
      }else{
        this.errorRegister=data
      }
    })
  }

   /* FORM REGISTER  */
   get first_name(){
    return this.registerForm.get('first_name') as FormControl;
  }
  get last_name(){
    return this.registerForm.get('last_name') as FormControl;
  }
  get username(){
    return this.registerForm.get('username') as FormControl;
  }
  get password(){
    return this.registerForm.get('password') as FormControl;
  }
  get email(){
    return this.registerForm.get('email') as FormControl;
  }
}
