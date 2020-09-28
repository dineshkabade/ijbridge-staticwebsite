import { Component, OnInit, Input } from '@angular/core';
import { FormControl } from '@angular/forms';
import { ValidationService } from 'src/app/core/services/validation.service';

@Component({
  selector: 'app-error-message',
  template: `<div *ngIf="errorMessage !== null"><small>{{errorMessage}}</small></div>`,
  styles: ['div { color: red; }']
})
export class ErrorMessageComponent implements OnInit {

  @Input() control: FormControl;

  myErrorMsg: string;
  constructor() { }

  ngOnInit() {
  }

  get errorMessage() {
    for (let propertyName in this.control.errors) {
      if (this.control.errors.hasOwnProperty(propertyName) && this.control.touched) {
        this.myErrorMsg = ValidationService.getValidatorErrorMessage(propertyName, this.control.errors[propertyName]);
        return this.myErrorMsg;
      }
    }

    return null;
  }

}
