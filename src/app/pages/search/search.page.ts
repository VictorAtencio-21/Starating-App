/* eslint-disable @typescript-eslint/quotes */
/* eslint-disable @typescript-eslint/ban-types */
import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

//Import Movie Service
import { MovieServiceService } from '../../services/movie-service.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.page.html',
  styleUrls: ['./search.page.scss'],
})
export class SearchPage implements OnInit {

  key: String;
  searchTerm: String;
  movies = [{}];
constructor(
  private http: HttpClient
) { }

  ngOnInit() {
    
    this.http
    .get<any>("https://starating-api.herokuapp.com/allMovies")
    .subscribe((res) => {
      console.log(res)
      this.movies = res;
    });
  }

}
