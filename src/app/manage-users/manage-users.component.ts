import { Component, OnInit } from '@angular/core';
import { UsersServiceService } from '../services/users-service.service';
import { UserModel } from '../models/user-model';
import { Router } from '@angular/router';

@Component({
  selector: 'app-manage-users',
  templateUrl: './manage-users.component.html',
  styleUrls: ['./manage-users.component.scss']
})
export class ManageUsersComponent implements OnInit {

  usersList : Array<UserModel> = [];
  constructor(private usersService: UsersServiceService, private router: Router ) { }

  ngOnInit() {
    this.setUsersList();
  }

  editItem(userModel: UserModel){
    this.router.navigateByUrl(`EditUser/${userModel.id}`);
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
