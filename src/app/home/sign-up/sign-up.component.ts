import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup} from '@angular/forms';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.css']
})
export class SignUpComponent implements OnInit {

  signUpForm: FormGroup;

  constructor(private fb: FormBuilder) { }

  ngOnInit(): void {
    this.buildForm();
  }
  buildForm() {
    this.signUpForm = this.fb.group({
      username: [''],
      contact: [''],
      email: [''],
      password: [''],
      role : [''],
      permissionAccess: false
    });
  }
  submit() {

  }
}
