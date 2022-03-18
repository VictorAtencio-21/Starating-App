/* eslint-disable @typescript-eslint/naming-convention */
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

export class Comment {
  _id: number;
  User: string;
  Date: string;
  Content: string;
  Movie: string;
}

@Injectable({
  providedIn: 'root'
})
export class MovieServiceService {

  private URL = 'https://starating-api.herokuapp.com/';

  constructor(private http: HttpClient) { }

  getMovies(){
    return this.http.get(this.URL+'allMovies');
  }

  getMovie(title){
    return this.http.get(this.URL+'movie/' + title);
  }

  getComments(title){
    return this.http.get(this.URL+'comments/' + title);
  }

  getComment(id){
    return this.http.get(this.URL+'comment/' + id);
  }
  
  sendLikeToMovie(id){
    return this.http.patch(this.URL+'movieRating', {
      "_id": id
    });
  }

  sendLikeToComment(id){
    return this.http.patch(this.URL+'commentLikes', {
      "_id": id
    });
  }

  sendComment(comment: Comment): Observable<any> {
    return this.http.post<Comment>(this.URL+'newComment', comment);
  }

}
