import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FooterComponent } from './footer/footer.component';
import { HeaderComponent } from './header/header.component';
import { EcommerceModule } from '../ecommerce/ecommerce.module';

@NgModule({
  declarations: [
    FooterComponent,
    HeaderComponent,
  ],
  imports: [
    CommonModule,
    EcommerceModule
  ],
  exports:[HeaderComponent, FooterComponent],
})
export class CoreModule { }
