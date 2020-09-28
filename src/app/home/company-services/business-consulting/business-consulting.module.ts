import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BusinessConsultingRoutingModule } from './business-consulting-routing.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MDBBootstrapModule } from 'angular-bootstrap-md';
import { SharedModule } from 'src/app/shared/shared.module';


@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    BusinessConsultingRoutingModule,
    FormsModule,
    MDBBootstrapModule.forRoot(),
    ReactiveFormsModule,
    SharedModule
  ]
})
export class BusinessConsultingModule { }
