import { Component, OnInit } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { UserModel } from 'src/app/models/user-model';

@Component({
  selector: 'app-edit-user',
  templateUrl: './edit-user.component.html',
  styleUrls: ['./edit-user.component.scss']
})
export class EditUserComponent implements OnInit {

  userModel : UserModel;
  constructor(public modal: NgbActiveModal) { }

  ngOnInit() {
    console.log(this.userModel);
    
  }

}
