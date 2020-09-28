import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { throwError } from 'rxjs';
import { catchError, map } from 'rxjs/operators';
@Injectable({
  providedIn: 'root'
})
export class ContactServiceService {
  env = environment
  
  constructor(private httpClient:HttpClient) { }

  public contactUsService(contactUsFormData, occupationData, agreeToTerms){
    let contactUrl = this.env.apiUrl +"v1/contactUs";

    var requestData = new FormData();
    requestData.append('name', contactUsFormData.name);
    requestData.append('occupations', occupationData);
    requestData.append('companyOrSchoolName', contactUsFormData.companyOrSchoolName);
    requestData.append('emailAddress', contactUsFormData.emailAddress);
    requestData.append('phoneNumber', contactUsFormData.phoneNumber);
    requestData.append('contentOfEnquiry', contactUsFormData.contentOfEnquiry);
    requestData.append('handlingOfPersonalInformation', agreeToTerms);
  
    return this.httpClient.post(contactUrl, requestData)
    .pipe(map(responseMessage => { 
      return responseMessage
     }
    ),  
    catchError(this.errorHandler)); 
  }

  errorHandler(error : HttpErrorResponse){
    return throwError(error);
  }

}