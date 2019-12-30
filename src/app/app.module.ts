import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavBarComponent } from './menus/nav-bar/nav-bar.component';
import { SignUpComponent } from './sign-up/sign-up.component';
import { ReactiveFormsModule } from "@angular/forms";
import { SignInComponent } from './sign-in/sign-in.component';
import { HttpClientModule } from "@angular/common/http";
import { HomeComponent } from './home/home.component';

@NgModule({
  declarations: [
    AppComponent,
    NavBarComponent,    
    SignUpComponent,
    SignInComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule, 
    ReactiveFormsModule,
    HttpClientModule
    ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
