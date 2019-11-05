import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { UsersServiceService } from "../services/users-service.service";
import { Router } from "@angular/router";

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.scss']
})
export class SignUpComponent implements OnInit {

  constructor(private formBuilder: FormBuilder, private usersService: UsersServiceService, private router: Router) { }

  signUpForm: FormGroup;

  ngOnInit() {
    this.signUpForm = this.formBuilder.group({
      firstName: ['', Validators.required],
      lastName: ['', Validators.required],
      email: ['', [Validators.email, Validators.required]],
      password: ['', [Validators.minLength(12), Validators.required]],
      mobileNumber: ['', Validators.required]
    });
  }

  get signUpData() { return this.signUpForm.controls; }

  onSubmit() {
    if (this.signUpForm.invalid) {
      return;
    }
    this.usersService.registerUser(this.signUpForm.value).subscribe(x => { this.router.navigate(["/SignIn"]) });
  }
}
