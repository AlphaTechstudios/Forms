import { Component, OnInit } from '@angular/core';
import { UsersServiceService } from '../services/users-service.service';
import { UserModel } from '../models/user-model';
import { Router } from '@angular/router';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { EditUserComponent } from '../PopUp/edit-user/edit-user.component';

@Component({
  selector: 'app-manage-users',
  templateUrl: './manage-users.component.html',
  styleUrls: ['./manage-users.component.scss']
})
export class ManageUsersComponent implements OnInit {

  usersList : Array<UserModel> = [];
  constructor(private usersService: UsersServiceService, private router: Router, private modalService: NgbModal ) { }

  ngOnInit() {
    this.setUsersList();
  }

  editItem(userModel: UserModel){
    // this.router.navigateByUrl(`EditUser/${userModel.id}`);
  
    const ref = this.modalService.open(EditUserComponent);
    ref.componentInstance.userModel = userModel;

    ref.result.then((yes) => {
      console.log("Ok Click");
      
    },
    (cancel)=>{
      console.log("Cancel Click");

    })
  }

  deleteItem(userModel: UserModel){
    console.log(userModel);
    
    this.usersService.deleteUserById(userModel.id).subscribe(x => this.setUsersList());
  }

  private setUsersList(){
    this.usersService.getUsers().subscribe(x => {
      this.usersList = x;
    } )
  }

}
