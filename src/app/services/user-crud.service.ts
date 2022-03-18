/* eslint-disable @typescript-eslint/no-unused-expressions */
/* eslint-disable @typescript-eslint/naming-convention */
import { Injectable } from '@angular/core';

import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Router } from '@angular/router';
import { URL } from 'url';

export class User {
  _id: number;
  name: string;
  lastname: string;
  username: string;
  email: string;
  password: string;
}

@Injectable({
  providedIn: 'root'
})
export class UserCrudService {

  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  };

  //url de la api
  private URL = 'https://starating-api.herokuapp.com/';

  constructor(
    private httpClient: HttpClient,
    private router: Router) { }

  signupUser(user: User): Observable<any> {
    return this.httpClient.post<User>(this.URL+'register', user);
  }

  signinUser(user: User): Observable<any>{
    return this.httpClient.post<User>(this.URL+'login', user);
   }

  loggedIn() {
    return !!localStorage.getItem('token');
  }

  logout() {
    localStorage.removeItem('token');
    this.router.navigate(['/']);
  }

  getToken() {
    return localStorage.getItem('token');
  }

  getUserJson(url: string){
    return this.httpClient.get(url);
  }
}
