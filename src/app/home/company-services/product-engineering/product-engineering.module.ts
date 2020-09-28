import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProductEngineeringRoutingModule } from './product-engineering-routing.module';
import { MDBBootstrapModule } from 'angular-bootstrap-md';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { SharedModule } from 'src/app/shared/shared.module';
import { TranslateModule } from '@ngx-translate/core';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    ProductEngineeringRoutingModule,
    FormsModule,
    MDBBootstrapModule.forRoot(),
    ReactiveFormsModule,
    SharedModule,
    TranslateModule
  ]
})
export class ProductEngineeringModule { }
