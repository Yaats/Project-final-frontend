import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {MovieTvService, Movie} from '../service/movie-tv.service';
import {UserService, User} from '../service/user.service';

@Component({
  selector: 'app-movie-details',
  templateUrl: './movie-details.component.html',
  styleUrls: ['./movie-details.component.css'],
})
export class MovieDetailsComponent implements OnInit {
  movieId: string;
  movie: Movie;
  user: User;

  constructor(
    private reqMdetails: ActivatedRoute,
    public apiMdetails: MovieTvService,
    private resMdetails: Router
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
      this.apiMdetails.add(this.movieId);
      this.resMdetails.navigateByUrl('/');
    }
    // const oneToAdd = this.movie;
    // this.apiMdetails
    //   .add(this.movie)
    //   .then(() => {
    //     this.resMdetails.navigateByUrl('/');
    //   })
    //   .catch(err => {
    //     console.log(err);
    //   });
  }
}
