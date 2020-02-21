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
    this.currentUserSubject = new BehaviorSubject<UserModel>(JSON.parse(sessionStorage.getItem('currentUser')));
    this.currentUser = this.currentUserSubject.asObservable();
  }

  public get currentUserObject(): UserModel {
    return this.currentUserSubject.value;
  }

  registerUser(userModel: UserModel) {
    return this.httpClient.post<UserModel>(this.baseUrl, userModel, this.httpOptions);
  }

  login(loginModel: LoginModel) {
    sessionStorage.removeItem('currentUser');

    return this.httpClient.post<any>(`${this.baseUrl}/login`, loginModel, this.httpOptions)
      .pipe(map(user => {
        sessionStorage.setItem('currentUser', JSON.stringify(user));
        console.log(JSON.stringify(user));
        console.log(this.currentUserSubject.value);


        this.currentUserSubject.next(user);
        return user
      }));
  }

  updateUser(userModel) {
    return this.httpClient.put(`${this.baseUrl}/UpdateUser`, userModel, this.httpOptions)
  }

  deleteUserById(id:number){
    return this.httpClient.delete(`${this.baseUrl}/DeleteUser/${id}`, this.httpOptions);
  }

  getUsers(): Observable<UserModel[]> {
    return this.httpClient.get<UserModel[]>(`${this.baseUrl}/GetUsers`, this.httpOptions)
  }

  getUserById(id: number): Observable<UserModel> {
    return this.httpClient.get<UserModel>(`${this.baseUrl}/${id}`, this.httpOptions)
  }

  logout() {
    localStorage.removeItem('currentUser');
    this.currentUserSubject.next(null);
  }

}
