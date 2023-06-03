import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { UsersService } from 'src/app/services/users.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
})
export class HeaderComponent {
  constructor(private router: Router, private userService: UsersService){
  }

  path: string = this.router.url
  menu: boolean = false
  ngOnInit(){}

  goToSection(section: string){
    this.router.navigate([section])
  }
  session(){
    this.userService.userConnected.next({
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
    this.router.navigate(["/login"])
  }
  toggleMenu(){
    this.menu = !this.menu
  }
}
