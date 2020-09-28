import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeRoutingModule } from './home-routing.module';
import { MDBBootstrapModule } from 'angular-bootstrap-md';
import { HomeComponent } from './home.component';
import { LandingComponent } from './landing/landing.component';
import { LayoutModule } from '../layout/layout.module';
import { SharedModule } from '../shared/shared.module';
import { CompanyServicesComponent } from './company-services/company-services.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { DownloadsPageComponent } from './downloads-page/downloads-page.component';
import { CompanyComponent } from './company/company.component';
import { TranslateModule } from '@ngx-translate/core';


@NgModule({
  declarations: [HomeComponent, LandingComponent, CompanyServicesComponent, DownloadsPageComponent, CompanyComponent],
  imports: [
    CommonModule,
    HomeRoutingModule,
    FormsModule,
    MDBBootstrapModule.forRoot(),
    ReactiveFormsModule,
    LayoutModule,
    SharedModule,
    TranslateModule
  ]
})
export class HomeModule { }
