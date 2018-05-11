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
    private userService: UserService
  ) {}

  ngOnInit() {
    this.reqMdetails.paramMap.subscribe(myParams => {
      this.movieId = myParams.get('movieId');
      this.fetchMovieData();
    });
    console.log(this.userService.currentUser);
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
      // const myList = new somethingbutwhat(
      //   this.currentUserId,
      //   this.movie.title,
      //   this.movie.release_date,
      //   this.movie.overview,
      //   this.movie.poster_path
      // );
      //   this.userList.push(myList)
      this.apiMdetails.add(this.movieId);
      this.resMdetails.navigateByUrl('/');
    }
  }
}
