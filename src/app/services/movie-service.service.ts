/* eslint-disable @typescript-eslint/naming-convention */
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class MovieServiceService {

  private URL = 'https://starating-api.herokuapp.com/';

  constructor(private http: HttpClient) { }

  getMovies(){
    return this.http.get(this.URL+'allMovies');
  }

  getMovie(){
    return this.http.get(this.URL+'movie/:title');
  }

}
