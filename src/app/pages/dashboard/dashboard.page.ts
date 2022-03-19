import { Component, OnInit } from '@angular/core';
import { MovieServiceService } from '../../services/movie-service.service';
import { MoviePage } from '../movie/movie.page';
import { ActivatedRoute } from '@angular/router';
import { Global } from 'src/app/global';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.page.html',
  styleUrls: ['./dashboard.page.scss'],
})
export class DashboardPage implements OnInit {

  moviesArray: Array<any> = [];

  constructor(
    public json: MovieServiceService,
    private http: HttpClient) { }

  ngOnInit() {
    this.json.getMovies().subscribe((data: any) => {
      this.moviesArray = data as any [];
    });
    
    const headers = new HttpHeaders()
            .set("Authorization", `Bearer ${Global.getToken()}`);

        this.http
        .get<any>(`https://starating-api.herokuapp.com/getUsers`, {headers: headers})
        .subscribe((res) => {
          const index = res.findIndex(user => {return user.email === Global.getEmail()})
          Global.setUser(res[index])
          console.log(Global.getUser());
      });
  }
}
