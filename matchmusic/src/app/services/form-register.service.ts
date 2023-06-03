import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class FormRegisterService {
  flagRegister = new BehaviorSubject<boolean>(false)
  $flagRegister = this.flagRegister.asObservable()

  constructor() { }
}
