import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home/home.component';
import { ProfileComponent } from './profile/profile.component';
import { BandComponent } from './band/band.component';
import { FeedComponent } from './feed/feed.component';
import { EcommerceModule } from '../ecommerce/ecommerce.module';
import { CoreModule } from '../core/core.module';
import { ShopComponent } from './shop/shop.component';
import { ProductdetailsComponent } from './productdetails/productdetails.component';
import { FormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    ProfileComponent,
    BandComponent,
    FeedComponent,
    HomeComponent,
    ShopComponent,
    ProductdetailsComponent
  ],
  imports: [
    CommonModule,
    EcommerceModule,
    CoreModule,
    FormsModule
  ],
  exports: [HomeComponent],
})
export class PagesModule { }
