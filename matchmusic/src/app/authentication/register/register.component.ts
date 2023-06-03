import { Component } from '@angular/core';
import { FormGroup, FormControl, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { FormRegisterService } from 'src/app/services/form-register.service';
import { UsersService } from 'src/app/services/users.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {
  constructor(private registerFormService: FormRegisterService, private userService: UsersService, private router: Router){}
  ngOnInit(){
    this.userService.$userConnected.subscribe(data => {
      if(data.username!=''){
        this.router.navigate(['/feed'])
      }
    })
    this.registerFormService.flagRegister.next(true);
  }
  ngOnDestroy(){
    this.registerFormService.flagRegister.next(false);
  }
}
