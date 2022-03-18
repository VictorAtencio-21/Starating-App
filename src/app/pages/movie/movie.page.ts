/* eslint-disable @typescript-eslint/ban-types */
/* eslint-disable @typescript-eslint/quotes */
import { Component, OnInit } from '@angular/core';
//import { HttpClient } from "@angular/common/http";
import { ActivatedRoute } from "@angular/router";
//Import Movie Service
import { MovieServiceService } from '../../services/movie-service.service';

@Component({
  selector: 'app-movie',
  templateUrl: './movie.page.html',
  styleUrls: ['./movie.page.scss'],
})
export class MoviePage implements OnInit {

  movies: {
  };

  constructor(
    private activatedRoute: ActivatedRoute,
    public json: MovieServiceService
  ) { }

  ngOnInit() {
    this.json.getMovie().subscribe((data: any) => {
      const movies = JSON.stringify(data);
      console.log(movies);
    });

    this.movies = this.activatedRoute.snapshot.paramMap.get("title");
  }
}
