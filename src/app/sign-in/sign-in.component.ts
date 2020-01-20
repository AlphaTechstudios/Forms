import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { UsersServiceService } from "../services/users-service.service";
import { Router } from "@angular/router";
import { first } from "rxjs/operators";


@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.scss']
})
export class SignInComponent implements OnInit {

  signInForm: FormGroup;
  isLoading = false;
  showError = false;

  constructor(private formBuilder: FormBuilder, private usersService: UsersServiceService, private router: Router) {
    if (this.usersService.currentUserObject) {
      this.router.navigate(["/Home"]);
    }
  }

  ngOnInit() {
    this.signInForm = this.formBuilder.group({
      email: ['', [Validators.email, Validators.required]],
      password: ['', Validators.required]
    });
  }

  get signInData() { return this.signInForm.controls; }

  onSubmit() {
    if (this.signInForm.invalid || this.isLoading) {
      return;
    }

    this.isLoading = true;
    // Call user service for login.
    this.usersService.login(this.signInForm.value).subscribe(x => {
      this.isLoading = false;
      // redirect to Home page.
      this.router.navigate(["/Home"]);
    },
      error => {
        this.isLoading = false;
        this.showError = true;
      });
  }

}
