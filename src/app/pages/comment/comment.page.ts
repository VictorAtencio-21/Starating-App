import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from "@angular/router";

@Component({
  selector: 'app-comment',
  templateUrl: './comment.page.html',
  styleUrls: ['./comment.page.scss'],
})
export class CommentPage implements OnInit {

  commentId: String;
  //comment
  //replies
  replies = [{
    User: "Vector",
    Date: "16-03-2022 17:35",
    Likes: 69,
    Content: "lol"
  },
  {
    User: "Adriana",
    Date: "16-03-2022 18:44",
    Likes: 420,
    Content: "Please I wanna finish this project its been 5 days straight workiing I feel like I am gonna collapse at any moment. Also your comment is lame..."
  }
]

  comments = [{
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
  }]

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

  constructor(
    private activatedRoute: ActivatedRoute
  ) { }

  ngOnInit() {
    this.commentId = this.activatedRoute.snapshot.paramMap.get("_id");
    /*
    this.http
    .get("http://localhost:2000/comment/" + this.commentId)
    .subscribe((res) => {
      this.comment = res;
      this.replies = res.Replies;
      
    });
     */

  }

}
