import { Component, OnInit } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { UserModel } from 'src/app/models/user-model';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { UsersServiceService } from 'src/app/services/users-service.service';

@Component({
  selector: 'app-edit-user',
  templateUrl: './edit-user.component.html',
  styleUrls: ['./edit-user.component.scss']
})
export class EditUserComponent implements OnInit {

  selectedUser: UserModel;
  editForm: FormGroup;
  isLoading = false;
  constructor(public modal: NgbActiveModal, private route: ActivatedRoute, private usersService: UsersServiceService, private formBuilder: FormBuilder, private router: Router) { }

  ngOnInit() {

    this.setForm()
  }

  onSubmit() {
    if (this.editForm.invalid || this.isLoading) {
      return;
    }
    this.isLoading = true;
    this.usersService.updateUser(this.editForm.value).subscribe(x => {
      this.isLoading = false;
      this.modal.close('Yes');
    },
      error => {
        this.isLoading = false;
      });
  }

  get editFormData() { return this.editForm.controls; }

  private setForm() {
    console.log(this.selectedUser);
    
    this.editForm = this.formBuilder.group({
      id: [this.selectedUser.id],
      firstName: [this.selectedUser.firstName, Validators.required],
      lastName: [this.selectedUser.lastName, Validators.required],
      email: [{ value: this.selectedUser.email, disabled: true }, [Validators.email, Validators.required]],
      mobileNumber: [this.selectedUser.mobileNumber, Validators.required]
    });
  }
}
