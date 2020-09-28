import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MDBBootstrapModule } from 'angular-bootstrap-md';
import { CompanyServicesRoutingModule } from './company-services-routing.module';
import { BusinessConsultingComponent } from './business-consulting/business-consulting.component';
import { ProductEngineeringComponent } from './product-engineering/product-engineering.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { SharedModule } from 'src/app/shared/shared.module';
import { TranslateModule } from '@ngx-translate/core';
import { MechEmbeddedComponent } from './mech-embedded/mech-embedded.component';
import { AutomotiveEmbeddedTabsComponent } from './mech-embedded/automotive-embedded-tabs/automotive-embedded-tabs.component';



@NgModule({
  declarations: [BusinessConsultingComponent, ProductEngineeringComponent, MechEmbeddedComponent, 
  AutomotiveEmbeddedTabsComponent],
  imports: [
    CommonModule,
    CompanyServicesRoutingModule,
    FormsModule,
    MDBBootstrapModule.forRoot(),
    ReactiveFormsModule,
    SharedModule,
    TranslateModule
  ]
})
export class CompanyServicesModule { }
