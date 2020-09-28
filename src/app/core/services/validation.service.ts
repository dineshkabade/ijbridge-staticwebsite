import { Injectable } from '@angular/core';
import { AbstractControl } from '@angular/forms';

@Injectable({
  providedIn: 'root'
})
export class ValidationService {

  constructor() { }

  static getValidatorErrorMessage(validatorName: string, validatorValue?: any) {
    let config = {
      'required': 'Required',
      'invalidEmailAddress': 'Invalid email address',
      'invalidPassword': 'Invalid password combination',
      'invalidPasswordMatch': 'Passwords does not match',
      'sapceValidation': 'This field should not contain space',
      'notUnique': validatorValue
      
    };

    return config[validatorName];
  }

  static emailValidator(control) {
    // RFC 2822 compliant regex
    if (control.value.match(/[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/)) {
      return null;
    } else {
      return { 'invalidEmailAddress': true };
    }
  }

  static passwordValidator(control) {
    // {6,100}           - Assert password is between 8 and 100 characters
    // (?=.*[0-9])       - Assert a string has at least one number
    if (control.value.match(/^(?=\D*\d)(?=[^a-z]*[a-z])(?=[^A-Z]*[A-Z])[a-zA-Z0-9!@#$%^&*].{7,30}$/)) {
      return null;
    } else {
      return { 'invalidPassword': true };
    }
  }

  static passwordMatch(control : AbstractControl):{[key: string]:boolean}{
    
    const newPassword = control.get('newPassword');
    const confirmPassword = control.get('confirmPassword')
    if(newPassword.invalid || confirmPassword.invalid){
        return null;
    }
    return newPassword && confirmPassword && newPassword.value != confirmPassword.value?{'invalidPasswordMatch': true}:null;
}

  static sapceValidation(control) {
    if (control.value.match(/^\S*$/)) {
      return null;
    } else {
      return { 'sapceValidation': true };
    }
  }
}
