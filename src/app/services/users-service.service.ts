import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { UserModel } from "../models/user-model";

@Injectable({
  providedIn: 'root'
})

export class UsersServiceService {

  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json; charset=utf-8'})
  };

  private baseUrl = "/api/Users";
  constructor(private httpClient: HttpClient) { }

  registerUser(userModel: UserModel) {
    return this.httpClient.post<UserModel>(this.baseUrl, userModel, this.httpOptions);
  }
}
