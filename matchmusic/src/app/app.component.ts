import { Component } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  currentRoute: string;
  routes: string[] = ["/login", "/register", "/"]

  constructor(private router: Router) {
    this.currentRoute = "";
    this.router.events.subscribe(event => {
      if (event instanceof NavigationEnd) {
          this.currentRoute = event.url;
      }
    });
  }
}
