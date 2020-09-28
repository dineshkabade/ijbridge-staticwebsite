import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ErrorMessageComponent } from './components/error-message/error-message.component';
import { MessageModalComponent } from './modals/message-modal/message-modal.component';
import { AlertModalComponent } from './modals/alert-modal/alert-modal.component';
import { BusinessInquiryComponent } from './business-inquiry/business-inquiry.component';
import { MDBBootstrapModule } from 'angular-bootstrap-md';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ResponseModalComponent } from './modals/response-modal/response-modal.component';


@NgModule({
  declarations: [ErrorMessageComponent, 
    MessageModalComponent,
    AlertModalComponent,
    BusinessInquiryComponent,
    ResponseModalComponent,
    
  ],
  imports: [
    CommonModule,
    FormsModule,
    MDBBootstrapModule.forRoot(),
    ReactiveFormsModule,
  ],
  exports: [
    ErrorMessageComponent, BusinessInquiryComponent
  ],
  entryComponents: [MessageModalComponent, AlertModalComponent, BusinessInquiryComponent]
})
export class SharedModule { }
