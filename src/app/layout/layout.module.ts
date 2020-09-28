import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LayoutRoutingModule } from './layout-routing.module';
import { MDBBootstrapModule } from 'angular-bootstrap-md';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';


@NgModule({
  declarations: [HeaderComponent, FooterComponent],
  imports: [
    CommonModule,
    LayoutRoutingModule,
    MDBBootstrapModule.forRoot()
  ],
  exports :[
    HeaderComponent, FooterComponent
  ]
})
export class LayoutModule { }
