import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './authentication/login/login.component';
import { RegisterComponent } from './authentication/register/register.component';
import { HomeComponent } from './pages/home/home.component';
import { BandComponent } from './pages/band/band.component';
import { ProfileComponent } from './pages/profile/profile.component';
import { FeedComponent } from './pages/feed/feed.component';
import { ShopComponent } from './pages/shop/shop.component';
import { ProductdetailsComponent } from './pages/productdetails/productdetails.component';
const routes: Routes = [
  {
    path:'',
    component:HomeComponent
  },
  {
    path:'login',
    component: LoginComponent
  },
  {
    path:'register',
    component:RegisterComponent
  },
  {
    path:'band',
    component: BandComponent
  },
  {
    path:'profile',
    component:ProfileComponent
  },
  {
    path:'feed',
    component: FeedComponent
  },
  {
    path:'shop',
    component: ShopComponent
  },
  {
    path:'shop/product/:id',
    component: ProductdetailsComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
