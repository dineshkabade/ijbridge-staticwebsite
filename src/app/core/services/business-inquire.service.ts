import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { throwError } from 'rxjs';
import { catchError, map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class BusinessInquireService {

  env = environment
  
  constructor(private httpClient:HttpClient) { }

  public businessInquiryService(businessEnquiryFormData){
    let beFormUrl = this.env.apiUrl +"v1/businessEnquiryForm";

    var requestData = new FormData();
    requestData.append('enquirerName', businessEnquiryFormData.enquirerName);
    requestData.append('enquirerEmail', businessEnquiryFormData.enquirerEmail);
    requestData.append('enquirerContactNumber', businessEnquiryFormData.enquirerContactNumber);
    requestData.append('enquirerCountryCode', businessEnquiryFormData.enquirerCountryCode);
    requestData.append('enquirerCountry', businessEnquiryFormData.enquirerCountry);
    requestData.append('enquirerCity', businessEnquiryFormData.enquirerCity);
    requestData.append('enquirerOrganizationName', businessEnquiryFormData.enquirerOrganizationName);
    requestData.append('businessEnquiryDetails', businessEnquiryFormData.businessEnquiryDetails);
  
    return this.httpClient.post(beFormUrl, requestData)
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
