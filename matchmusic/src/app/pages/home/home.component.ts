import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UsersService } from 'src/app/services/users.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent {
  constructor(private router: Router, private userService: UsersService){}

  goToLogin(){
    this.router.navigate(['login'])
  }

  music= {
    title:"Soy músico",
    image: '../../../assets/images/guitar-classical-guitar-acoustic-guitar-electric-guitar.webp',
    description: "Armá tu perfil personal como músico para mostrar lo que hacés y encontrar gente con quien tocar"
  }
  band = {
    title:"Tengo una banda",
    image: '../../../assets/images/pexels-photo-2601192.jpeg',
    description: "Creá tu perfil como banda para armar un perfil y contactar con otros músicos, espacios para ir a tocar y para que la gente conozca lo que hacen."
  }

  bar = {
    title:"Tengo un espacio",
    image: '../../../assets/images/pexels-photo-6173928.webp',
    description: "¿Tenés un lugar para hacer shows? Ponete en contacto con músicos para programar fechas en vivo."
  }

}
