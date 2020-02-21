import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SignUpComponent } from "../app/sign-up/sign-up.component";
import { SignInComponent } from "../app/sign-in/sign-in.component";
import { HomeComponent } from "../app/home/home.component";
import { ManageUsersComponent } from './manage-users/manage-users.component';
import { AuthGuard } from './Guards/auth-guard';
import { EditUserComponent } from './edit-user/edit-user.component';

const routes: Routes = [
  { path: 'SignUp', component: SignUpComponent },
  { path: 'SignIn', component: SignInComponent },
  { path: 'Home', component: HomeComponent },
  { path: 'ManageUsers', component: ManageUsersComponent, canActivate: [AuthGuard] },
  { path: 'EditUser/:id', component: EditUserComponent, canActivate: [AuthGuard] },
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
