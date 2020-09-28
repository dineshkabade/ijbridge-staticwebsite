import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MDBBootstrapModule } from 'angular-bootstrap-md';

import { LandingRoutingModule } from './landing-routing.module';
import { TranslateModule } from '@ngx-translate/core';


@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    LandingRoutingModule,
    MDBBootstrapModule.forRoot(),
    TranslateModule
  ]
})
export class LandingModule { }
