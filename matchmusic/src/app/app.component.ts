import { Component } from '@angular/core';
import { FormGroup, FormBuilder, Validators, FormControl } from '@angular/forms';
import { FormRegisterService } from './services/form-register.service';
import { UsersService } from './services/users.service';
import { User, UserRequest } from './authentication/models/user.model';
import { Router, Event, NavigationEnd } from '@angular/router';
import { throwError } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  constructor(private formBuilder: FormBuilder, private formRegisterService: FormRegisterService, private userService: UsersService, private navigate: Router) {}

  user: UserRequest = {
    'username':'',
    'email':'',
    'password':'',
    'first_name':'',
    'last_name': ''
  }
  flagRegister: boolean = false;
  flagLogin: boolean = false;

  errorRegister: string = ''
  errorLogin: string = ''
  registerForm: FormGroup = new FormGroup({});
  loginForm: FormGroup = new FormGroup({});


  ngOnInit(): void {

    this.formRegisterService.$flagRegister.subscribe(el => {
      this.flagRegister = el
    })
    this.formRegisterService.$flagLogin.subscribe(el => {
      this.flagLogin = el
    })
    this.registerForm = this.formBuilder.group({
      first_name: ['', [Validators.required]],
      last_name: ['', [Validators.required]],
      username: ['', [Validators.required, Validators.minLength(5)]],
      password: ['', [Validators.required, Validators.minLength(5),Validators.maxLength(16)]],
      email: ['', [Validators.required, Validators.email]]
    });
    this.loginForm = this.formBuilder.group({
      usernameLogin: ['', [Validators.required]],
      passwordLogin: ['', [Validators.required]]
    });
  }

  goRegister(){
    this.navigate.navigate(["/register"])
  }


  /* FORMS */
  loginSubmited(){
    this.userService.userByUsername(this.loginForm.value["usernameLogin"], this.loginForm.value["passwordLogin"]).subscribe(el => {
      if(String(el)=="Datos incorrectos"){
        this.errorLogin = "Datos incorrectos"
      } else {
        this.errorLogin = ""
        this.userService.userConnected.next(el)

        this.navigate.navigate(['/feed'])
      }
    })
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
          this.navigate.navigate(["/login"])
        }else{
          this.errorRegister=data
        }
      })
  }

  /* FORM LOGIN */
  get usernameLogin(){
    return this.loginForm.get('username') as FormControl;
  }
  get passwordLogin(){
    return this.loginForm.get('password') as FormControl;
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
