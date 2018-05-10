import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {MovieTvService, Movie} from '../service/movie-tv.service';

@Component({
  selector: 'app-movie-details',
  templateUrl: './movie-details.component.html',
  styleUrls: ['./movie-details.component.css'],
})
export class MovieDetailsComponent implements OnInit {
  movieId: string;
  movie: Movie;

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
      .then((result: Movie) => {
        this.movie = result;
      })
      .catch(err => {
        console.log('DETAILS MARCHENT PAS 🐙', err);
      });
  }
}
