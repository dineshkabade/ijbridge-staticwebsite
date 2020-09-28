import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { ValidationService } from 'src/app/core/services/validation.service';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { BusinessInquireService } from 'src/app/core/services/business-inquire.service';
import { LoaderService } from 'src/app/core/services/loader.service';
import { MessageModalComponent } from '../modals/message-modal/message-modal.component';
import { AlertModalComponent } from '../modals/alert-modal/alert-modal.component';

@Component({
  selector: 'app-business-inquiry',
  templateUrl: './business-inquiry.component.html',
  styleUrls: ['./business-inquiry.component.css']
})
export class BusinessInquiryComponent implements OnInit {

  isShowFrame: boolean = false;
  showCloseChatIcon:boolean = true;
  businessInquiryForm: FormGroup;
  showLoader : boolean;

  constructor(private formBuilder : FormBuilder,
    private modalService: NgbModal, private businesssInquiry: BusinessInquireService,
    private loaderService: LoaderService) { }

  ngOnInit(): void {
    this.businessInquiryForm = this.formBuilder.group({
      enquirerName: ['', [Validators.required]],
      enquirerEmail: ['', [Validators.required, ValidationService.emailValidator]],
      enquirerContactNumber: ['', [Validators.required,Validators.pattern('[6-9]\\d{9}')]],
      enquirerCountryCode: ['', [Validators.required]],
      enquirerCountry: ['', [Validators.required]],
      enquirerCity: ['', [Validators.required]],
      enquirerOrganizationName: ['', [Validators.required]],
      businessEnquiryDetails: ['', [Validators.required]],
    });

    this.loaderService.status.subscribe((value : boolean) => {
      this.showLoader = value;
    })
  }

  startChat() {
    this.isShowFrame = true;
    this.showCloseChatIcon = false;
  }

  onCloseChat() {
    this.isShowFrame = false;
    this.showCloseChatIcon = true;
  }

  onKey(event: any) {
    return event.keyCode === 9 || event.keyCode === 8 || event.keyCode === 46 ? true : !isNaN(Number(event.key));
  }

  sendInquiryDetails(){
    if(this.businessInquiryForm.invalid) {
      (<any>Object).values(this.businessInquiryForm.controls).forEach(
        control => {
          control.markAsTouched();
          control.markAsDirty();
        });
        this.response.message = "Please fill required fields";
        this.response.header = "Alert";
        this.response.headerColor = "orange-header";
        this.openMessageModal();
        return;
    }
    this.loaderService.display(true);
    this.businesssInquiry.businessInquiryService(this.businessInquiryForm.value).subscribe(data => {
      this.loaderService.display(false);
      this.response.message = data["response"];
      this.response.header = "Success";
      this.response.headerColor = "green-header";
      this.openMessageModal();
    }, error => {
      this.loaderService.display(false);     
      console.log("Error while sending business inquiry information user.");
      if(error.error.developerMessage) {
        this.response.message = error.error.developerMessage;
      } else {
        this.response.message = "Something went wrong, please try again later."
      }
        this.response.header = "Error";
        this.response.headerColor = "red-header";
        this.openMessageModal();
     
    });
  }


  public response: any = {};
  openMessageModal() {
    const modalRef = this.modalService.open(MessageModalComponent, { centered: true });
    modalRef.componentInstance.response = this.response;
  }

  public alertResponse: any = {};
  openAlertModal() {
    const alertModalRef = this.modalService.open(AlertModalComponent, { centered: true });
    alertModalRef.componentInstance.alertResponse = this.alertResponse;
    // alertModalRef.result.then((isOk) => {
    //   if (isOk) {
    //     this.registerAlumini();
    //   }
    // });
  }
}
