import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup} from '@angular/forms';
import {HomeService} from '../home.service';
import {Router} from '@angular/router';



@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.css']
})
export class SignUpComponent implements OnInit {

  signUpForm: FormGroup;
  success = false;
  value;
  constructor(private fb: FormBuilder, private homeService: HomeService, private router: Router) {}

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
    this.homeService.createUsers(this.signUpForm.value).subscribe(
      () => {
        this.success = true,
          setTimeout( () => this.router.navigate(['/home/logIn']), 1000);
      },
       err => console.log(err)
      );
  }
}
