import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  loginForm: FormGroup = new FormGroup({});

  constructor(private router: Router, private formBuilder: FormBuilder) {}

  ngOnInit(): void {
    this.loginForm = this.formBuilder.group({
      username: ['', [Validators.required, Validators.maxLength(5)]],
      password: ['', [Validators.required, Validators.minLength(8)]]
    });
  }

  loginUser(){
    console.warn(this.loginForm.value)
  }

  get user(){
    return this.loginForm.get('username')
  }

  get password(){
    return this.loginForm.get('password')
  }

  clickSection(section: string) {
    this.router.navigate([section]);
  }
}
