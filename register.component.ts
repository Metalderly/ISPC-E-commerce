import { Component } from '@angular/core';
import { FormGroup, FormBuilder, Validators, FormControl } from '@angular/forms';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {

  registerForm: FormGroup = new FormGroup({});
  constructor(private formBuilder: FormBuilder) {}
  ngOnInit(): void {
    this.registerForm = this.formBuilder.group({
      name: ['', [Validators.required, Validators.minLength(4)]],
      username: ['', [Validators.required, Validators.minLength(5)]],
      password: ['', [Validators.required, Validators.minLength(5),Validators.maxLength(16)]],
      email: ['', [Validators.required, Validators.email]]
       dni: [  '',[Validators.required,Validators.minLength(5),Validators.maxLength(16) ]],         ]


    });
  
  }
  registerSubmited(){
    console.log(this.registerForm)
  }
  get name(){
    return this.registerForm.get('name') as FormControl;
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

  get dni(){
    return this.registerForm.get('dni') as FormControl;
  }



}
