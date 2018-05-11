import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {MovieTvService, Movie} from '../service/movie-tv.service';
import {UserService, User} from '../service/user.service';
import {List, ListService} from '../service/list.service';

@Component({
  selector: 'app-movie-details',
  templateUrl: './movie-details.component.html',
  styleUrls: ['./movie-details.component.css'],
})
export class MovieDetailsComponent implements OnInit {
  movieId: string;
  movie: Movie;
  userList: Array<string>;

  constructor(
    private reqMdetails: ActivatedRoute,
    public apiMdetails: MovieTvService,
    private resMdetails: Router,
    private userService: UserService,
    private listServ: ListService
  ) {}

  ngOnInit() {
    this.reqMdetails.paramMap.subscribe(myParams => {
      this.movieId = myParams.get('movieId');
      this.fetchMovieData();
    });
  }

  fetchMovieData() {
    this.apiMdetails
      .getDetails(this.movieId)
      .then((result: any) => {
        this.movie = result;
        console.log(result)
      })
      .catch(err => {
        console.log(err);
      });
  }

  addListClick() {
    const {title} = this.movie;
    const isOk = confirm(`Are you sure you wanna add ${title} to your list ? `);
    if (!isOk) {
      return;
    } else {
      this.listServ.currentList.allItems.push(this.movie);
      this.apiMdetails
        .addMovie(this.listServ.currentList.allItems)
        .then(result => {
          console.log(result);
        })
        .catch(err => {
          console.log('ça marche passsssssssssssss', err);
        });
      this.resMdetails.navigateByUrl('/');
    }
  }
}
