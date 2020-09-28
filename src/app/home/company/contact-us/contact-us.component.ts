import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { ContactServiceService } from 'src/app/core/services/contact-service.service';
import { LoaderService } from 'src/app/core/services/loader.service';
import { ValidationService } from 'src/app/core/services/validation.service';
import { MessageModalComponent } from 'src/app/shared/modals/message-modal/message-modal.component';
import { AlertModalComponent } from 'src/app/shared/modals/alert-modal/alert-modal.component';

@Component({
  selector: 'app-contact-us',
  templateUrl: './contact-us.component.html',
  styleUrls: ['./contact-us.component.css']
})
export class ContactUsComponent implements OnInit {

  contactUsForm: FormGroup;
  showLoader : boolean= false;
  checkboxValues: string[] = [];
  isTermsAgree = false;

  constructor(private formBuilder: FormBuilder,
    private modalService: NgbModal, private contactService: ContactServiceService,
    private loaderService: LoaderService) { }

  occupationData = [
    { label: 'Student', checked: false },
    { label: 'Employee', checked: false },
    { label: 'Entrepreneur', checked: false },
    { label: 'Other', checked: false }
  ];

  ngOnInit(): void {
    this.contactUsForm = this.formBuilder.group({
      name: ['', [Validators.required]],
      occupation: ['', [Validators.required]],
      companyOrSchoolName: ['', [Validators.required]],
      emailAddress: ['',  [Validators.required, ValidationService.emailValidator]],
      phoneNumber: ['', [Validators.required,Validators.pattern('[6-9]\\d{9}')]],
      contentOfEnquiry: ['', [Validators.required]],
      handlingOfPersonalInformation: ['', [Validators.required]],
    });
  }

  get occupation() { return this.contactUsForm.get('occupation'); }
  get terms() { return this.contactUsForm.get('handlingOfPersonalInformation'); }

  onOccupationChange(event, index, item) {
     item.checked = !item.checked;
    console.log(index, event, item);
    if(item.checked){
      this.checkboxValues.push(item.label)
    }else {
      let index = this.checkboxValues.indexOf(item.label);
      this.checkboxValues.splice(index, 1);
    }
    console.log(this.checkboxValues)
  }

  toggleVisibility(e){
    console.log(e.checked);
    this.isTermsAgree = e.checked
  }

  contactUs(){
    if(this.contactUsForm.invalid) {
      (<any>Object).values(this.contactUsForm.controls).forEach(
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
    this.contactService.contactUsService(this.contactUsForm.value, this.checkboxValues, this.isTermsAgree).subscribe(data => {
      this.loaderService.display(false);
      this.response.message = data["response"];
      this.response.header = "Success";
      this.response.headerColor = "green-header";
      this.openMessageModal();
    }, error => {
      this.loaderService.display(false);     
      console.log("Error while sending information user.");
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
