import { Component, OnInit } from '@angular/core';
import { MovieServiceService } from '../../services/movie-service.service';
import { MoviePage } from '../movie/movie.page';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.page.html',
  styleUrls: ['./dashboard.page.scss'],
})
export class DashboardPage implements OnInit {

  moviesArray: Array<any> = [];

  constructor(
    public json: MovieServiceService) { }

  ngOnInit() {
    this.json.getMovies().subscribe((data: any) => {
      this.moviesArray = data as any [];
    });
  }

}
