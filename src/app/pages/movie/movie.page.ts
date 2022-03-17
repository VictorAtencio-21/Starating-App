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
  //comments
  movie = {
    title: "Batman",
    genre: "Superheroes",
    rating: "7/10",
    photos: "https://lanoticia.com/wp-content/uploads/2022/03/batman-robert-pattinson-promo-images-dc-fandome.jpg"
  };

  comments = [
    {
    User: "Diwingo",
    Date: "16-03-2022 12:30",
    Likes: 3,
    Content: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Inventore quam, vero quibusdam accusantium consequatur suscipit ducimus repudiandae sint placeat sunt ea accusamus tempore enim, repellat ut cumque blanditiis labore voluptate.",
    rep: false,
    Replies: []
  },
    {
    User: "Vactor",
    Date: "16-03-2022 17:15",
    Likes: 6,
    Content: "amogus xddd",
    rep: true,
    Replies: [{
      User: "Vector",
      Date: "16-03-2022 17:33",
      Likes: 69,
      Content: "lol",
    }],
    _id: 2,
  }
]

/**
 * sendLikeToComment
 public sendLikeToComment(id) {
      this.http
      .patch("http://localhost:2000/commentLikes", {
        "_id": id
      })
      .subscribe((res) => {
        console.log(`♥ El comentario de _id = ${id} ha recibido un me gusta `);
      });
}
*/

/**
 * sendLikeToMovie
 public sendLikeToMovie(id) {
      this.http
      .patch("http://localhost:2000/movieRating", {
        "_id": id
      })
      .subscribe((res) => {
        console.log(`♦ La peli de _id = ${id} ha recibido un me gusta `);
      });
}
*/

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

    this.http
      .get("http://localhost:2000/comments/" + this.movieTitle)
      .subscribe((res) => {
        if(res){
          this.comments = res;
        }else{
          this.comments = false;
        }
      });


      */
  }

}
