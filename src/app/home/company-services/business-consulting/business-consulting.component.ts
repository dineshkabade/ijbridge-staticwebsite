import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-business-consulting',
  templateUrl: './business-consulting.component.html',
  styleUrls: ['./business-consulting.component.css']
})
export class BusinessConsultingComponent implements OnInit {

  loginForm: FormGroup;
  
  constructor(private formBuilder : FormBuilder) { }

  ngOnInit(): void {
    this.loginForm = this.formBuilder.group({
      userName:['',Validators.required],
      password:['']
    });
  }

  login(){

  }

}
