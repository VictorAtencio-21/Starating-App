/* eslint-disable @typescript-eslint/ban-types */
/* eslint-disable @typescript-eslint/quotes */
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
//import { HttpClient } from "@angular/common/http";
import { ActivatedRoute } from "@angular/router";
//Import Movie Service
import { MovieServiceService } from '../../services/movie-service.service';
import { Global } from 'src/app/global';

@Component({
  selector: 'app-movie',
  templateUrl: './movie.page.html',
  styleUrls: ['./movie.page.scss'],
})
export class MoviePage implements OnInit {
  
  movieTitle: String;
  movies = {
    title: ''
  };
  hasComments = false;
  comments = [{}];
  commentForm: FormGroup;

  /**
   * sendLikeToMovie
   */
  public sendLikeToMovie(id) {
    this.json.sendLikeToMovie(id).subscribe((data: any) =>{
      console.log(`${data.title} recibió un me gusta. Ahora su rating es de ${data.rating}`);
      
    })
  }

  /**
   * sendLikeToComment
   */
  public sendLikeToComment(id) {
    this.json.sendLikeToComment(id).subscribe((data: any) =>{
      console.log(`${data.username} recibió un me gusta en el comentario ${data._id}.`);
      
    })
  }
  
  constructor(
    private activatedRoute: ActivatedRoute,
    public json: MovieServiceService,
    public formBuilder: FormBuilder
    ) {
      this.commentForm = this.formBuilder.group({
        User: [''],
        Date: [''],
        Content: [''],
        Movie: ['']
      });
     }
    
    ngOnInit() {
      console.log(Global.getEmail());
      
      this.movieTitle = this.activatedRoute.snapshot.paramMap.get("title");
      this.json.getMovie(this.movieTitle).subscribe((data: any) => {
        if(data.comments.length){
          this.hasComments = true;
          this.json.getComments(this.movieTitle).subscribe((data: any) => {
            data.forEach(element => {
              this.comments.push(element)
            });
            console.log(this.comments);
            console.log(`Esta peli tiene un total de ${data.comments.length}`);
          });
        }else{
        console.log(`Esta peli tiene un total de ${data.comments.length} comentarios`);
        
      }
      this.movies = data;
      console.log(this.movies);
    });
  }
  
  comment(){
    this.commentForm.value.User = Global.getUser().username;
    this.commentForm.value.Movie = this.movieTitle;
    this.commentForm.value.Date = Date.now();

    console.log(this.commentForm.value);
    if (!this.commentForm.valid) {
      return false;
    } else {
      this.json.sendComment(this.commentForm.value).subscribe((response) => {
        console.log(response);
      },
      error => console.log(error));
    }
  }
}

