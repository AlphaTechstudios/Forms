import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SignUpComponent } from "../app/sign-up/sign-up.component";
import { SignInComponent } from "../app/sign-in/sign-in.component";

const routes: Routes = [
  { path: 'SignUp', component: SignUpComponent },
  { path: 'SignIn', component: SignInComponent },
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
