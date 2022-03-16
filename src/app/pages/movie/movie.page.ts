/* eslint-disable @typescript-eslint/ban-types */
/* eslint-disable @typescript-eslint/quotes */
import { Component, OnInit } from '@angular/core';
//import { HttpClient } from "@angular/common/http";
import { ActivatedRoute } from "@angular/router";

@Component({
  selector: 'app-movie',
  templateUrl: './movie.page.html',
  styleUrls: ['./movie.page.scss'],
})
export class MoviePage implements OnInit {

  movieTitle: String;
  //movie;
  movie = {
    title: "Lorem ipsum dolor sit amet consectetur.",
    genre: "Superheroes",
    rating: "7/10",
    photos: "https://lanoticia.com/wp-content/uploads/2022/03/batman-robert-pattinson-promo-images-dc-fandome.jpg"
  };

  constructor(
    //private http: HttpClient,
    private activatedRoute: ActivatedRoute
  ) { }

  ngOnInit() {
    this.movieTitle = this.activatedRoute.snapshot.paramMap.get("title");
    /*
    this.http
      .get("http://localhost:2000/movie/" + this.movieTitle)
      .subscribe((res) => {
        this.movie = res;
      });
      */
  }

}
