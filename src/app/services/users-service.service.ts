import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { UserModel } from "../models/user-model";
import { LoginModel } from "../models/login-model";
import { BehaviorSubject, Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})

export class UsersServiceService {

  private currentUserSubject: BehaviorSubject<UserModel>;
  currentUser: Observable<UserModel>;

  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json; charset=utf-8' })
  };

  private baseUrl = "/api/Users";
  constructor(private httpClient: HttpClient) {
    this.currentUserSubject = new BehaviorSubject<UserModel>(JSON.parse(localStorage.getItem('currentUser')));
    this.currentUser = this.currentUserSubject.asObservable();
  }

  public get currentUserObject():UserModel{
    return this.currentUserSubject.value;
  }

  registerUser(userModel: UserModel) {
    return this.httpClient.post<UserModel>(this.baseUrl, userModel, this.httpOptions);
  }

  login(loginModel: LoginModel) {
    return this.httpClient.post<any>(`${this.baseUrl}/login`, loginModel, this.httpOptions)
    .pipe(map(user=>{
      localStorage.setItem('currentUser', JSON.stringify(user));
      this.currentUserSubject.next(user);
      return user
    }));
  }

  logout(){
    localStorage.removeItem('currentUser');
    this.currentUserSubject.next(null);
  }
}
