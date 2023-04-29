import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home/home.component';
import { ProfileComponent } from './profile/profile.component';
import { BandComponent } from './band/band.component';



@NgModule({
  declarations: [
    HomeComponent,
    ProfileComponent,
    BandComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [HomeComponent],
})
export class DashboardModule { }
