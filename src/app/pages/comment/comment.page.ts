import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from "@angular/router";
//Import Movie Service
import { MovieServiceService } from '../../services/movie-service.service';

@Component({
  selector: 'app-comment',
  templateUrl: './comment.page.html',
  styleUrls: ['./comment.page.scss'],
})
export class CommentPage implements OnInit {

  commentId: String;
  comment
  replies

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
    public json: MovieServiceService
  ) { }

  ngOnInit() {
    this.commentId = this.activatedRoute.snapshot.paramMap.get("_id");
    this.json.getComment(this.commentId).subscribe((data: any) =>{
      this.comment = data;
      this.replies = data.Replies;
    })

  }

}
