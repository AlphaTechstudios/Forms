import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { UsersServiceService } from '../services/users-service.service';
import { UserModel } from '../models/user-model';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-edit-user',
  templateUrl: './edit-user.component.html',
  styleUrls: ['./edit-user.component.scss']
})
export class EditUserComponent implements OnInit {
  selectedUser: UserModel;
  editForm: FormGroup;
  isLoading = false;
  constructor(private route: ActivatedRoute, private usersService: UsersServiceService, private formBuilder: FormBuilder, private router: Router) { }

  ngOnInit() {
    const userId = this.route.snapshot.params['id'];
    this.setForm(userId);
  }

  onSubmit() {
    if (this.editForm.invalid || this.isLoading) {
      return;
    }
    this.isLoading = true;
    this.usersService.updateUser(this.editForm.value).subscribe(x => {
      this.isLoading = false;
      this.router.navigateByUrl("ManageUsers")
    },
      error => {
        this.isLoading = false;
      });
  }

  get editFormData() { return this.editForm.controls; }

  private setForm(userId: number) {
    this.usersService.getUserById(userId).subscribe(x => {
      this.selectedUser = x
      this.editForm = this.formBuilder.group({
        id: [this.selectedUser.id],
        firstName: [this.selectedUser.firstName, Validators.required],
        lastName: [this.selectedUser.lastName, Validators.required],
        email: [{ value: this.selectedUser.email, disabled: true }, [Validators.email, Validators.required]],
        mobileNumber: [this.selectedUser.mobileNumber, Validators.required]
      });

    });

  }
}
