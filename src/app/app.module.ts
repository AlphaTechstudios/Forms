import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavBarComponent } from './menus/nav-bar/nav-bar.component';
import { SignUpComponent } from './sign-up/sign-up.component';
import { ReactiveFormsModule } from "@angular/forms";
import { SignInComponent } from './sign-in/sign-in.component';
import { HttpClientModule, HTTP_INTERCEPTORS } from "@angular/common/http";
import { HomeComponent } from './home/home.component';
import { JwtInterceptor } from './Tools/jwt-interceptor';
import { ManageUsersComponent } from './manage-users/manage-users.component';
import { EditUserComponent } from './edit-user/edit-user.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

@NgModule({
  declarations: [
    AppComponent,
    NavBarComponent,    
    SignUpComponent,
    SignInComponent,
    HomeComponent,
    ManageUsersComponent,
    EditUserComponent
  ],
  
  imports: [
    BrowserModule,
    AppRoutingModule, 
    ReactiveFormsModule,
    HttpClientModule,
    NgbModule
    ],
  providers: [
    {provide:HTTP_INTERCEPTORS, useClass: JwtInterceptor, multi:true}
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
