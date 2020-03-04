import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';

@Component({
  selector: 'app-log-in',
  templateUrl: './log-in.component.html',
  styleUrls: ['./log-in.component.css']
})
export class LogInComponent implements OnInit {
  logInForm: FormGroup;
  error = false;
  constructor(private fb: FormBuilder) { }

  ngOnInit(): void {
    this.buildLogInForm();
  }
  buildLogInForm() {
    this.logInForm = this.fb.group({
      email: [undefined, Validators.required],
      password: [undefined, Validators.required, Validators.minLength(6)]
    });
  }
  get email() {
    return this.logInForm.get('email');
  }
  get password() {
    return this.logInForm.get('password');
  }
}
