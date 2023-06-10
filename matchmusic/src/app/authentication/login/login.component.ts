import { Component } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { UsersService } from 'src/app/services/users.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  username: string = ''
  password: string = ''
  errorLogin: string = ''
  loginForm: FormGroup = new FormGroup({});

  constructor(private formBuilder: FormBuilder, private userService: UsersService, private router: Router){}
  ngOnInit(){
    this.loginForm = this.formBuilder.group({
      usernameLogin: ['', [Validators.required]],
      passwordLogin: ['', [Validators.required]]
    });
  }

  loginSubmited(){
    this.userService.userByUsernameAndPassword(this.loginForm.value["usernameLogin"], this.loginForm.value["passwordLogin"]).subscribe(el => {
      if(String(el)=="Datos incorrectos"){
        this.errorLogin = "Datos incorrectos"
      } else {
        this.errorLogin = ""
        localStorage.setItem("username", JSON.stringify(el))
        this.router.navigate(['/feed'])
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
  goRegister(){
    this.router.navigate(["/register"])
  }
}
