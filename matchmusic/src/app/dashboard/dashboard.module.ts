import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home/home.component';
import { ProfileComponent } from './profile/profile.component';
import { BandComponent } from './band/band.component';
import { FeedComponent } from './feed/feed.component';
import { EcommerceModule } from '../ecommerce/ecommerce.module';
import { CoreModule } from '../core/core.module';


@NgModule({
  declarations: [
    ProfileComponent,
    BandComponent,
    FeedComponent,
    HomeComponent,
  ],
  imports: [
    CommonModule,
    EcommerceModule,
    CoreModule
  ],
  exports: [HomeComponent],
})
export class DashboardModule { }
