import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private http : HttpClient) { }

  baseURL="https://sewwas.herokuapp.com/user/";

  registerUser(data){
    return this.http.post(this.baseURL+'register',data);
  }

  loginUser(data){
    return this.http.post(this.baseURL+'login',data);
  }
}
