import { Component } from '@angular/core';
import { FormGroup, FormControl, FormBuilder, Validators } from '@angular/forms';
import { FormRegisterService } from 'src/app/services/form-register.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {
  constructor(private registerFormService: FormRegisterService){}
  ngOnInit(){
    this.registerFormService.flagRegister.next(true);
  }
  ngOnDestroy(){
    this.registerFormService.flagRegister.next(false);
  }
}
