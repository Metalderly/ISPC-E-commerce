import { Component } from '@angular/core';
import { FormGroup, FormBuilder, Validators, FormControl } from '@angular/forms';
import { UsersService } from './services/users.service';
import { User, UserRequest } from './authentication/models/user.model';
import { Router, Event, NavigationEnd } from '@angular/router';
import { Subscriber, Subscription, filter, throwError } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  constructor(private router: Router) {

  }
  urls = ["/register", "/login", "/"]
  ngOnInit(){
    this.router.events.pipe(filter((e): e is NavigationEnd => e instanceof NavigationEnd))
    .subscribe((ev: NavigationEnd) => {
      if(this.urls.includes(ev.url)){
        console.log("now")
        if(localStorage.getItem("username")!=null){
          this.router.navigate(["/feed"])
        }
      }
      if (!this.urls.includes(ev.url)) {
        console.log(localStorage.getItem("username"))
        if(localStorage.getItem("username")==null){
          this.router.navigate(["/login"])
        }
      }
    })
  }
}
