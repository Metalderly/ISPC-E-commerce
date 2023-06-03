import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { FormRegisterService } from 'src/app/services/form-register.service';
import { UsersService } from 'src/app/services/users.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  constructor(private registerFormService: FormRegisterService, private userService: UsersService, private router: Router){}
  ngOnInit(){
    this.userService.$userConnected.subscribe(data => {
      if(data.username!=''){
        this.router.navigate(['/feed'])
      }
    })
    this.registerFormService.flagLogin.next(true);
  }
  ngOnDestroy(){
    this.registerFormService.flagLogin.next(false);
  }
}
