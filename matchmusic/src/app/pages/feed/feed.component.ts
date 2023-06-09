import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { UsersService } from 'src/app/services/users.service';

@Component({
  selector: 'app-feed',
  templateUrl: './feed.component.html',
  styleUrls: ['./feed.component.css']
})
export class FeedComponent {
  constructor(private userService: UsersService, private router: Router){}
  username = JSON.parse(localStorage.getItem('username')!!)

  ngOnInit(){
  }
}
