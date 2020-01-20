import { Component } from '@angular/core';
import { Router } from "@angular/router";
import { UsersServiceService } from "../app/services/users-service.service";
import { UserModel } from './models/user-model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'Forms';
  currentUser : UserModel
  constructor(private router: Router, private userService: UsersServiceService){
    this.userService.currentUser.subscribe(x=> this.currentUser = x);
  }

  logOut(msg:string){
    this.userService.logout();
    this.router.navigate(["/SignIn"]);
  }
}
