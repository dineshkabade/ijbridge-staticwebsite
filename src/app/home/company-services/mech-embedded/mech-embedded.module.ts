import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MechEmbeddedRoutingModule } from './mech-embedded-routing.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MDBBootstrapModule } from 'angular-bootstrap-md';
import { SharedModule } from 'src/app/shared/shared.module';
import { ControlUnitComponent } from './control-unit/control-unit.component';
import { ProductEngineeringComponent } from './product-engineering/product-engineering.component';
import { FunctionalSafetyComponent } from './functional-safety/functional-safety.component';


@NgModule({
  declarations: [ControlUnitComponent, ProductEngineeringComponent, FunctionalSafetyComponent],
  imports: [
    CommonModule,
    MechEmbeddedRoutingModule,
    FormsModule,
    MDBBootstrapModule.forRoot(),
    ReactiveFormsModule,
    SharedModule
  ]
})
export class MechEmbeddedModule { }
