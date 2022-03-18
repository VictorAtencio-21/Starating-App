/* eslint-disable @typescript-eslint/quotes */
/* eslint-disable @typescript-eslint/ban-types */
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
  movies = [{
    title: "Batman",
    genre: "Superheroes",
    rating: "7/10",
    photos: "https://lanoticia.com/wp-content/uploads/2022/03/batman-robert-pattinson-promo-images-dc-fandome.jpg"
  },
  {
    title: "Mario Movie",
    genre: "Videogames",
    rating: "2/10",
    photos: "https://static.invenglobal.com/upload/image/2021/04/10/i1618094189754080.jpeg"
  }
];
constructor(
  //private http: HttpClient
) { }

  ngOnInit() {
    /*
    this.http
    .get<any>("http://localhost:2000/home")
    .subscribe((res) => {
      console.log(res)
      this.movies = res;
    });
    */
  }

}
