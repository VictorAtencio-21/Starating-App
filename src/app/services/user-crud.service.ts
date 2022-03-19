/* eslint-disable prefer-const */
/* eslint-disable arrow-body-style */
/* eslint-disable @typescript-eslint/no-unused-expressions */
/* eslint-disable @typescript-eslint/naming-convention */
import { Injectable } from '@angular/core';

import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Router } from '@angular/router';
import { catchError, map } from 'rxjs/operators';


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

  headers = new HttpHeaders().set('Content-Type', 'application/json');

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

  getUserData(email) {
    return this.httpClient.get(this.URL+'user/' + email);
  }

  getUserProfile(email: any): Observable<any> {
    let api = `${this.URL}user/${email}`;
    return this.httpClient.get(api, { headers: this.headers }).pipe(
      map((res) => {
        return res || {};
      }),
    );
  }
}
